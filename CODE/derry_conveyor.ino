#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <ESPConnect.h>
#include <HTTPClient.h>
#include <ESP32Servo.h>
#include <Wire.h> 
#include <LiquidCrystal_I2C.h>
#include <Ultrasonic.h>
#include <ArduinoJson.h>

#define kiri 1
#define kanan 2
#define berhenti 0
#define plan_a 1
#define plan_b 2
#define servo_Pin1 23 //kiri
#define servo_Pin2 25 //kanan
#define motor1Pin1 18 
#define motor1Pin2 5 
#define echo 15
#define trigger 2
#define p_led1 12 //KUNING
#define p_led2 27 //HIJAU
#define p_potensio 35
#define tombol 4

static const int servoPin1 = servo_Pin1;
static const int servoPin2 = servo_Pin2;

char host_server[50] = "http://192.168.3.221/conveyorn";
String lok_kirim = "/config/post-esp.php?";
String lok_load = "/load.php";
int portserver = 80;
String api_key = "tPmAT5Ab3j7F1";

int distance,pot_value,val;
byte statusb;
String host_servers = "http://192.168.137.1/absen";
String kode="";
String label_kode="";
String k_barang1="8994214995547"; 
String k_barang2="8994214995543";
String label_barang1="ROKOK SAMPOERNA";
String label_barang2="SABUN LIFEBOY";
const int freq = 30000;
const int pwmChannel = 0;
const int resolution = 8;
int dutyCycle = 200;
int counter_barang;
int speedpwm = 200;
char datasend;
byte flag,cek,counter;
byte val_tombol,val_jarak;
int waitservo = speedpwm + 1100;
Servo servo1;
Servo servo2;
LiquidCrystal_I2C lcd(0x3F, 16, 2);
Ultrasonic ultrasonic(trigger,echo);
AsyncWebServer server(80);

void setup() 
{
    Serial.begin(115200);
    Serial2.begin(115200);
    Serial2.setTimeout(1000);
    lcd.begin();
    pinMode(motor1Pin1, OUTPUT);
    pinMode(motor1Pin2, OUTPUT);
    pinMode(p_led2, OUTPUT);
    pinMode(tombol, INPUT_PULLUP);
    ledcSetup(pwmChannel, freq, resolution);
    ledcAttachPin(motor1Pin1, pwmChannel);
    gerakmotor(0);
    ESPConnect.autoConnect("ESPConfig");
    if(ESPConnect.begin(&server)){
    Serial.println("Connected to WiFi");
    Serial.println("IPAddress: "+WiFi.localIP().toString());
    }else{
      Serial.println("Failed to connect to WiFi");
    }
    server.on("/", HTTP_GET, [&](AsyncWebServerRequest *request){
      request->send(200, "text/plain", "Hello from ESP");
    });
    request(1);
    server.begin();
    ESP32PWM::allocateTimer(2);
    ESP32PWM::allocateTimer(3);
    servo1.setPeriodHertz(50);    // standard 50 hz servo
    servo2.setPeriodHertz(50);    // standard 50 hz servo
    servo1.attach(servo_Pin1, 500, 2400); // attaches the servo on pin 18 to the servo object
    servo2.attach(servo_Pin2, 500, 2400); // attaches the servo on pin 18 to the servo object
    servo1.write(90);
    delay(1000);
    servo2.write(90);
    delay(1000);
    tampillcd(2);
}

void loop() 
{
  gerakmotor(kiri);
  bacasensor();
  Serial.println(val_jarak);
  bacagm66();
 if(val_jarak <=5)
  {
   kode ="";
   gerakmotor(0);
   delay(20);
   //bacagm66();
   }
}

void bacasensor()
{
  val_tombol = digitalRead(tombol);
  val_jarak = ultrasonic.read();
  if(val_tombol == 0)
  {
    delay(100);
    request(1);
  }
  
}
void bacagm66()
{
   if (Serial2.available() > 0) 
   {
    kode=Serial2.readStringUntil('\r');
    delay(50);
    if(kode.length()> 2)
    {
    Serial.print("terima data = ");
    Serial.println(kode);
    Serial.println(flag);
    Serial2.flush();
    cek = 0;
    flag = 1;
    olah_barang(); 
    delay(2000);
    gerakservo(0);
    tampillcd(2);
    kode = "";
    flag = 0;
    Serial2.flush();
    Serial.println(flag);
    cek = 0;
    counter_barang++;
    tampillcd(2);
    }
   }}


void gerakmotor(int b)
{
  if(b == kiri)
  {
    ledcWrite(pwmChannel, speedpwm);
    digitalWrite(motor1Pin1, HIGH);
    digitalWrite(motor1Pin2, LOW);
  }else if(b == kanan){
    ledcWrite(pwmChannel, speedpwm);
   digitalWrite(motor1Pin1, HIGH);
   digitalWrite(motor1Pin2, LOW);
  }else if(b == 0){
    ledcWrite(pwmChannel, 0);
    digitalWrite(motor1Pin1, LOW);
    digitalWrite(motor1Pin2, LOW);
  }else if(b == 4){
    ledcWrite(pwmChannel, 200);
    digitalWrite(motor1Pin1, LOW);
    digitalWrite(motor1Pin2, LOW);
  }
 
}


void olah_barang()
{
  label_kode = "";
    Serial.print("Label barang 1 = ");
  Serial.print(label_barang1);
  Serial.print(" ||  k_barang1 = ");
  Serial.println(k_barang1);
  Serial.print("Label barang 2 = ");
  Serial.print(label_barang2);
  Serial.print(" ||  k_barang1 = ");
  Serial.println(k_barang2);
  Serial.print("Speed = ");
  Serial.println(speedpwm);
  if((kode.equals(k_barang1)) || (kode.equals(k_barang2)))
  {
     if(kode.equals(k_barang1))
    {
      label_kode = label_barang1;
      tampillcd(1);
      delay(waitservo);
      gerakservo(plan_a);
    }else if(kode.equals(k_barang2))
    {
      label_kode = label_barang2;
      tampillcd(1);
      delay(waitservo);
      gerakservo(plan_b);
    }
  }else{
      label_kode = "Tidak terdaftar";
      tampillcd(1);
      gerakservo(0);
    }
    Serial.println(label_kode);
    request(0);
}

void gerakservo(int b)
{
    if(b == 0)
    {
      servo2.write(90);
      servo1.write(90);
    }else if(b == plan_a) //kriim ke kiri
    {
      servo1.write(130);
      servo2.write(180);
    }else if(b == plan_b){ //kririm ke kanan
      servo2.write(50);
      servo1.write(0);
  }
}

void tampillcd(int a)
{
  lcd.clear();
  if(a == 1)
  {
    lcd.setCursor(0,0);
    lcd.print("KODE=");
    lcd.print(kode);
    lcd.setCursor(0,1);
    lcd.print("BARANG=");
    lcd.print(label_kode);
  }else if( a == 2)
  {
    lcd.setCursor(0,0);
    lcd.print("KONVEYOR BARANG");
    lcd.setCursor(0,1);
    lcd.print("COUNTER=");
    lcd.print(counter_barang);
  }
}


void request(int a)
{
 if(WiFi.status()== WL_CONNECTED)
 {
    WiFiClient client;
    HTTPClient http;
//    
  if ( a == 0)
  {
    lcd.clear();
    lcd.setCursor(0,0);
    lcd.print("Update");
    String urlserver = String(host_server)+lok_kirim+"api_key="+api_key+"&kode="+kode;
    lcd.clear();
    http.begin(client,urlserver.c_str());
    Serial.println(urlserver.c_str());
    int httpResponseCode = http.GET();
    lcd.setCursor(0,1);
    lcd.print(httpResponseCode);
    if(httpResponseCode == 200 )
    {
      Serial.println("DATA TERKIRIM");
//      digitalWrite(led_hijau,LOW);
    }
    urlserver = "";
  }else 
if(a==1)
  {
    digitalWrite(p_led2, HIGH);
    String hostsetting = String(host_server)+lok_load;
    http.begin(client,hostsetting);
    int httpCode = http.GET();            //Send the request
    Serial.println(httpCode);
    if (httpCode == 200) 
    {
      String payload = http.getString();
      Serial.println(payload);
      StaticJsonDocument<256> doc;
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.print("deserializeJson() failed: ");
        Serial.println(error.c_str());
        return;
      }
      JsonObject root_0 = doc["0"];
      label_barang1 = root_0["namabarang1"].as<String>(); // "sss"
      k_barang1 = root_0["kodebarang1"].as<String>(); // "22222222222222"
      label_barang2 = root_0["namabarang2"].as<String>(); // "dddd"
      k_barang2 = root_0["kodebarang2"].as<String>(); // "333444444"
      speedpwm = root_0["kecepatan"]; // "200"
      const char* root_0_id = root_0["id"]; // "1"
      counter_barang = doc["jumlah"]; // "6"
      Serial.print("Label barang 1 = ");
      Serial.print(label_barang1);
      Serial.print(" ||  k_barang1 = ");
      Serial.println(k_barang1);
      Serial.print("Label barang 2 = ");
      Serial.print(label_barang2);
      Serial.print(" ||  k_barang2 = ");
      Serial.println(k_barang2);
      Serial.print("Speed = ");
      Serial.println(speedpwm);
      digitalWrite(p_led2, LOW);
    }
   http.end();
  }
 }

}

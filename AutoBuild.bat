@ECHO OFF
call mvnw clean install
call mysqld --console --standalone
java -jar -Dapple.awt.UIElement="true" 
target/AlertingSystemWebApp-0.0.1-SNAPSHOT.jar -h
npm install 
ng serve --open
PAUSE
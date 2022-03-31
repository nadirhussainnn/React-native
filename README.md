# React-native
This repo contains aterial related to Mobile app development with React native

Building first app with React Native and running it on Emuator or physical device

>Install JDK>=11, NodeJS>=12, Android SDK, Emulator
>set JAVA_HOME, ANDROID_HOME
>npx react-native init AwesomeProject
>npx react-native run-android
	It will through error: So https://stackoverflow.com/questions/66696339/first-react-native-app-task-appprocessdebugmainmanifest-failed

android> gradle.properties PASTE org.gradle.jvmargs=--add-opens java.base/java.io=ALL-UNNAMED

Replace distribution URL(andoid->gradle-wrapper->grp) with
distributionUrl=https\://services.gradle.org/distributions/gradle-7.2-all.zip 

You must start emulator or connect Mobile device with dev options and USD debugging.

How to start emulator

cd to C:\Users\nadir\AppData\Local\Android\Sdk\emulator
>emulator -list-avds
>emulator -avd <name of Emulator>

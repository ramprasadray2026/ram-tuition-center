#!/bin/bash
set -e

echo "🚀 Building RAM Tuition Center APK..."

# Step 1: Build web assets
echo "📦 Building web assets..."
pnpm install
pnpm build

# Step 2: Copy to Android
echo "📋 Copying to Android..."
mkdir -p android/app/src/main/assets
cp -r dist/* android/app/src/main/assets/ 2>/dev/null || true

# Step 3: Generate keystore
echo "🔒 Setting up signing..."
mkdir -p android/app
if [ ! -f "android/app/ram-tuition-key.keystore" ]; then
  keytool -genkey -v -keystore android/app/ram-tuition-key.keystore \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -alias "ram-tuition-key" \
    -storepass "RamTuition@2026" \
    -keypass "RamTuition@2026" \
    -dname "CN=Ram Tuition, OU=Education, L=India, ST=India, C=IN"
fi

# Step 4: Build APK
echo "🔨 Building Android APK..."
cd android
chmod +x gradlew
./gradlew clean
./gradlew assembleRelease

cd ..
echo "✅ APK Build Complete!"
echo "📱 APK Location: android/app/build/outputs/apk/release/app-release.apk"

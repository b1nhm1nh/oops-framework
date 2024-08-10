if [ ! -d "extensions" ]; then
    mkdir extensions
fi
cd extensions

if [ ! -d "oops-plugin-framework-tools" ]; then
    git clone -b master https://github.com/dgflash/oops-plugin-framework-tools.git
else
    cd oops-plugin-framework-tools
    git pull
fi

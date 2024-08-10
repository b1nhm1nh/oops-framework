md extensions
cd extensions

IF EXIST oops-plugin-framework-tools (
goto update
) ELSE (
goto clone
)

:clone
git clone -b master https://github.com/dgflash/oops-plugin-framework-tools.git

:update
cd oops-plugin-framework-tools
git pull
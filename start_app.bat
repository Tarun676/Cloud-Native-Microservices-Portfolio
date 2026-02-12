@echo off
echo ====================================================
echo Starting Microservices Portfolio (Development Mode)
echo ====================================================
echo.

echo [1/3] Stopping any existing containers...
docker-compose -f docker/docker-compose.dev.yml down

echo.
echo [2/3] Building and Starting Dockers (Detached Mode)...
docker-compose -f docker/docker-compose.dev.yml up -d --build

echo.
echo [3/3] Opening Application in Browser...
echo Waiting 10 seconds for services to initialize...
timeout /t 10 /nobreak >nul

start http://localhost:5173

echo.
echo ====================================================
echo SUCCESS! 
echo Frontend: http://localhost:5173
echo APIs are running in the background.
echo To stop, run: docker-compose -f docker/docker-compose.dev.yml down
echo ====================================================
pause

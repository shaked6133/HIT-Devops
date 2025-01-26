pid=$(ps aux | grep 'demo-0.0.1-SNAPSHOT.jar' | grep -v grep | awk '{print $2}')
if [ ! -z "$pid" ]; then
    kill -15 $pid  # Graceful shutdown
    echo "Application with PID $pid has been stopped."
else
    echo "No running process found for demo-0.0.1-SNAPSHOT.jar"
fi

STATUS=$(curl -s "https://api.uptimerobot.com/v2/getMonitors" \
  -H "Content-Type: application/json" \
  -d '{"api_key": "u2761563-435910b41726a7870aec41d7"}' | jq '.monitors[0].status')

if [ "$STATUS" -eq 2 ]; then
  echo "Sensor is UP"
  exit 0
else
  echo "Sensor is DOWN"
  exit 1
fi

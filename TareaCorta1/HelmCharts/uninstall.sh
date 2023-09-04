# Comandos para correr 
# wsl
# dos2unix uninstall.sh
# ./uninstall.sh

# Delete Helm releases
helm uninstall grafana-config
helm uninstall databases
helm uninstall monitoring-stack
helm uninstall bootstrap

# Check everything was deleted
kubectl get namespaces # should be empty
helm list # no releases
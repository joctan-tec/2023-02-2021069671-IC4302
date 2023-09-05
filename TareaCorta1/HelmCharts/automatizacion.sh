# Comandos para correr 
# cd HelmCharts
# wsl
# dos2unix automatizacion.sh
# ./automatizacion.sh
helm repo add elastic https://helm.elastic.co
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Los namespaces se generan en el helm chart bootstrap
helm install bootstrap bootstrap

# Verificar namespaces
kubectl get namespaces

# Ahora se procede a la instalación de las herramientas de monitoreo
# Prometheus y Grafana se instalan con el chart monitoring-stack
cd monitoring-stack
helm dependency build
cd ..
helm install monitoring-stack monitoring-stack

# Para ver los pods asociados a grafana y prometheus
kubectl get pods -n monitoring

# Posteriormente se podria agregar dependencia Thanos sidecar y store a este chart


# Ahora se instalan las bases de datos dependencia con sus respectivas métriicas
cd databases
helm dependency build
cd ..
helm install databases databases


#Para ver los pods del namespace databases
kubectl get pods -n databases

# Para ver si se detecta la base para scraping
# kubectl port-forward -n monitoring service/monitoring-stack-prometheu-prometheus 9090:9090
# Solo saldra la base que tenga enabled: true en todo

# Finalmente se instala la config de Grafana
helm install grafana-config grafana-config

# Esto despliega la contraseña para login en grafana en la terminal
kubectl get secret grafana-admin-credentials -n monitoring -o jsonpath='{.data.GF_SECURITY_ADMIN_PASSWORD}' | base64 --decode; echo

#wait(10)
kubectl port-forward -n monitoring service/grafana-service 3000:3000

# localhost:3000
# username: admin 
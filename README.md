# Context

I created a container image from that Dockerfile and I pushed it to a public Docker repository (aleksva/k8s-exp). I refer the image in the deploy.yaml file (line 18).

For the environmental variable - it's in the image as well as the YAML file (lines 21-23).

# Usage

To create the deployment run the command:
```
kubectl apply -f deploy.yaml
```

To expose the service run the command:
```
kubectl port-forward service/cognyte-svc 31080:31080
```

To demonstrate that the HTTP server takes a variable run the command:
```
curl -k 127.0.0.1:31080/ -d 'input here'
```

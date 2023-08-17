
date: 2013-7-19

category: sass

tag:

  - sass

# sass(aps)开发文档

#### 前提准备

参考:https://www.yuque.com/leifengyang/oncloud/ctiwgo#gSYVF

1) 创建aws 云主机

2)设置主机密码登录

```perl
# 编辑ssh 配置文件
vi /etc/ssh/sshd_config

#PasswordAuthentication 将no改成yes
PasswordAuthentication yes

#重启ssh
sudo service ssh restart

#设置用户名和密码
adduser aps
密码:zxc<>?123

sudo passwd aps

```





####  一 .安装docker-compose 最新版(192.168.50.230)

1. compse稳定版

   ```perl
   sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   
   sudo chmod +x /usr/local/bin/docker-compose
   
   docker-compose --version
   
   ```

   

2. 安装erpnext

   ```perl
   #下载
   git clone https://gitee.com/yuzelin/erpnext_oob_docker && cd erpnext_oob_docker
   
   cd /opt/software/frappe_docker
   #安装
   docker-compose --project-name erpnext_oob -f pwd.yml up -d
   
   #访问
   http://192.168.50.230/login#login
   
   #用户名和密码
   #administrator,密码admin登录系统
   
   ```

   

3. 报错

   ```yaml
   # docker login -u "${DOCKER_USER}" -p "${DOCKER_PASS}" "${DOCKER_URL}"
   error getting credentials - err: exit status 1, out: `Cannot autolaunch D-Bus without X11 $DISPLAY`
   ```

   解决:

   ```perl
   rm /usr/bin/docker-credential-secretservice
   ```

   

4. 停止所有的docker

   ```perl
   docker-compose --project-name erpnext_oob -f pwd.yml down
   ```
   

   
5. 查看compose中yaml文件中创建的卷标

   ```perl
   (base) root@shangjian:~# docker volume ls |grep db-data
   (base) root@shangjian:~# docker volume inspect erpnext_oob_db-data
   [
       {
           "CreatedAt": "2023-08-15T14:01:17+08:00",
           "Driver": "local",
           "Labels": {
               "com.docker.compose.project": "erpnext_oob",
               "com.docker.compose.version": "2.20.2",
               "com.docker.compose.volume": "db-data"
           },
           "Mountpoint": "/var/lib/docker/volumes/erpnext_oob_db-data/_data",
           "Name": "erpnext_oob_db-data",
           "Options": null,
           "Scope": "local"
       }
   ]
   ```

   

6. docker 查看内部占用的端口

   ```perl
   docker exec -it 23db451681a3 ss -tuln
   ```

   

   

   

   

   

   

7. ubuntu20.04 部署k8s

   1) 环境初始化

   ```perl
   # 关闭SWAP
   swapoff -a
   rm -f /swap.img
   vim /etc/fstab
   # /swap.img                         注释掉
   
   # 开启IP转发
   vim /etc/sysctl.conf
   net.ipv4.ip_forward=1
   
   # 查看状态
   sysctl -p
   ```

   2) 安装docker

   ```perl
   #安装依赖
   sudo apt-get update
   sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
   #安装GPG证书
   curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
   
   #写入软件源信息
   sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
   
   #更新安装docker
   sudo apt-get -y update
   apt install -y docker-ce
   
   #安装docker-compose
   apt install -y docker-compose
   
   #安装docker开机启动
   systemctl enable docker
   
   #配置镜像
   
   $ cat > /etc/docker/daemon.json << EOF
   {
     "registry-mirrors": ["https://b9pmyelo.mirror.aliyuncs.com"]
   }
   EOF
   
   #查看docker 版本
   docker --version
   ```

   

8. 安装k8s

   ```perl
   #添加证书
   curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | apt-key add - 
   
   #添加apt源
   cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
   deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main
   EOF
   
   apt-get update
   
   #查看可安装版本
   apt-cache madison kubelet
   
   #安装指定的版本
   apt-get install -y kubelet=1.20.9-00 kubeadm=1.20.9-00 kubectl=1.20.9-00
   
   #设置开机自启动
   sudo systemctl enable kubelet && sudo systemctl start kubelet
   
   #查看所需的镜像
   kubeadm config images list --kubernetes-version=v1.20.9
   
   k8s.gcr.io/kube-apiserver:v1.20.9
   k8s.gcr.io/kube-controller-manager:v1.20.9
   k8s.gcr.io/kube-scheduler:v1.20.9
   k8s.gcr.io/kube-proxy:v1.20.9
   k8s.gcr.io/pause:3.2
   k8s.gcr.io/etcd:3.4.13-0
   k8s.gcr.io/coredns:1.7.0
   
   #从新地址下载镜像(将上面的地址换成下面的)
   
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.20.9
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.20.9
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.20.9
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.20.9
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.13-0
   docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.7.0
   
   #为镜像重新打Tag(重新命名上面拉取的镜像)
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.20.9 k8s.gcr.io/kube-apiserver:v1.20.9
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.20.9 k8s.gcr.io/kube-controller-manager:v1.20.9
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.20.9 k8s.gcr.io/kube-scheduler:v1.20.9
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.20.9 k8s.gcr.io/kube-proxy:v1.20.9
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.2 k8s.gcr.io/pause:3.2
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.4.13-0 k8s.gcr.io/etcd:3.4.13-0
   docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.7.0 k8s.gcr.io/coredns:1.7.0
   ```

   

9. 主节点初始化

   ```perl
   #所有机器添加master域名映射,以下需要修改为自己的
   echo "172.31.75.125  cluster-endpoint" >> /etc/hosts
   
   kubeadm init \
   --apiserver-advertise-address=172.31.75.125 \
   --control-plane-endpoint=cluster-endpoint\
   --service-cidr=10.96.0.0/16 \
   --pod-network-cidr=192.168.0.0/16
   
   
   kubeadm init --kubernetes-version=v1.20.9 --pod-network-cidr=192.168.0.0/16 --service-cidr=10.96.0.0/16 --ignore-preflight-errors=Swap
   ```

   执行完主节点配置出现如下提示:

   ```perl
   Your Kubernetes control-plane has initialized successfully!             # 安装成功的提示
   
   To start using your cluster, you need to run the following as a regular user:
   
     mkdir -p $HOME/.kube
     sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
     sudo chown $(id -u):$(id -g) $HOME/.kube/config
   
   You should now deploy a pod network to the cluster.
   Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
     https://kubernetes.io/docs/concepts/cluster-administration/addons/
   
   Then you can join any number of worker nodes by running the following on each as root:
   
   kubeadm join 192.168.93.136:6443 --token vvd4zg.4ay8rxanmh7fopec \
       --discovery-token-ca-cert-hash sha256:df77248c6939eb6c6062d50e6e99c4f881f48e619ef4d2e61304a529a4c2eb1f
   ```

   安装上述提示在master节点上执行

   ```perl
     mkdir -p $HOME/.kube
     sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
     sudo chown $(id -u):$(id -g) $HOME/.kube/config
     export KUBECONFIG=/etc/kubernetes/admin.conf
     
   ```

   此时执行命令kubectl get nodes 会报错

   错误:

   ```css
   The connection to the server localhost:8080 was refused - did you specify the right host or port?
   ```

   ```perl
   #解决
   #在每个节点上操作
   将master节点的/etc/kubernetes/admin.conf 拷贝到每个节点/etc/kubernetes/admin.conf
   echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >> /etc/profile
   #生效
   source /etc/profile
    
   ```

   执行如下命令kubectl get cs,报错:

   如果出现Get "http://127.0.0.1:10252/healthz": dial tcp 127.0.0.1:10252: connect: connection refused 错误

   ```perl
   #解决
   #在master节点执行
   vim /etc/kubernetes/manifests/kube-scheduler.yaml
   #将
   - --port=0
   #这行注释掉
   
   vim /etc/kubernetes/manifests/kube-controller-manager.yaml
   #将
   - --port=0
   #这行注释掉
   
   #再次执行命令kubectl get cs
   #如下为正常的结果
   
   NAME                 STATUS    MESSAGE             ERROR
   controller-manager   Healthy   ok                  
   scheduler            Healthy   ok                  
   etcd-0               Healthy   {"health":"true"} 
   
   
   
   ```

   ```perl
   #这时运行 kubectl get node,为noready 需要安装网络插件
   
   # -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml(这个需要验证是否能用)
   
   curl https://docs.projectcalico.org/v3.20/manifests/calico.yaml -O
   kubectl apply -f calico.yaml
   
   #这时在运行kubectl get node 为ready状态
   
   ```

   

   

   

10. 创建部署:在k8s创建一个pod,验证是否正常

   ```perl
   kubectl create deployment nginx --image=nginx
   kubectl expose deployment nginx --port=80 --type=NodePort
   ```

   

11. 查询pod 和svc状态

    ```perl
    kubectl get pod,svc
    
    root@ip-172-31-70-77:~# kubectl get pod,svc
    NAME                          READY   STATUS    RESTARTS   AGE
    pod/nginx-6799fc88d8-22459    1/1     Running   0          16h
    pod/nginx3-5465449d99-76blm   1/1     Running   0          16m
    
    NAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
    service/kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP        17h
    service/nginx        NodePort    10.96.94.166   <none>        80:30221/TCP   16h
    service/nginx3       NodePort    10.96.3.97     <none>        80:32630/TCP   16m
    
    ```

    

12. 访问

    ```perl
    http://18.206.193.80:30221 #就能访问nginx
    ```

    

13. kubctl 相关操作

    ```perl
    # 获取节点的状态
    kubectl get node
    
    # 获取pod 状态
    kubectl get pod,svc
    
    #获取组件状态
    kubectl get cs
    
    #部署和暴露端口
    
    kubectl create deployment nginx --image=nginx
    kubectl expose deployment nginx --port=80 --type=NodePort
    
    #查看部署
    kubectl get deployment
    root@ip-172-31-70-77:~# kubectl get deployment
    NAME     READY   UP-TO-DATE   AVAILABLE   AGE
    nginx    1/1     1            1           16h
    nginx1   1/1     1            1           37m
    nginx3   1/1     1            1           6m31s
    
    #删除一个部署
    root@ip-172-31-70-77:~# kubectl delete deployment nginx1
    deployment.apps "nginx1" deleted
    
    #删除service
    #查看service的状态
    kubectl get pod,svc
    
    root@ip-172-31-70-77:~# kubectl get svc
    NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
    kubernetes   ClusterIP   10.96.0.1       <none>        443/TCP        17h
    nginx        NodePort    10.96.94.166    <none>        80:30221/TCP   16h
    nginx1       NodePort    10.96.156.183   <none>        81:31116/TCP   40m
    nginx3       NodePort    10.96.3.97      <none>        80:32630/TCP   9m33s
    
    #我们要删除service nginx1
     kubectl delete svc nginx1
    kubectl delete svc nginx-service
    
    #k8s 查看命名空间
    kubectl get namespace 
    #k8s 创建命名空间
    kubectl create ns liyulong
    
    #查看命名空间的pod
    kubectl get pods -n liyulong
    
    #在命名空间创建pod
    kubectl run my-pod --image=nginx --namespace=liyulong
    
    #在指定的命名空间中创建两个副本的部署
     kubectl create deployment my-deployment --image=nginx --replicas=2 --namespace=liyulong
     
    #用负载均衡的方式暴露这两个部署
    kubectl expose deployment my-deployment --type=LoadBalancer --port=80 --namespace=liyulong
    
    #进入pod 内部
    kubectl exec -it my-deployment-57d86476b6-skh2s --namespace=liyulong -- /bin/sh
    
    #查看命名空间的service
    kubectl get svc --namespace=liyulong
    
    #查看所有空间的pod
    kubectl get pods --all-namespaces
    
    #应用dashboard
    kubectl apply -f recommended.yaml
    #dashbord  删除dashboard
    kubectl delete -f recommended.yaml
    ```

    

14. 创建k8s dashboard

    ```perl
    #下载dashboard
    
    wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml
    
    #修改配置
    
    kind: Service
    apiVersion: v1
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
      name: kubernetes-dashboard
      namespace: kubernetes-dashboard
    spec:
      type: NodePort  # 新增
      ports:
        - port: 443
          targetPort: 8443
          nodePort: 30001  # 新增
      selector:
        k8s-app: kubernetes-dashboard
    
    #应用配置
    kubectl apply -f recommended.yaml
    
    #查看相应的状态
    
    
    1) #查看dashboard 的pod信息
    kubectl get pod -A |grep kubernetes-dashboard
    
    kubernetes-dashboard   dashboard-metrics-scraper-79c5968bdc-bnvss   1/1     Running            0          51m
    kubernetes-dashboard   kubernetes-dashboard-658485d5c7-pq55z        1/1     Running            0          51m
    
    2) #查看dashboard 暴露的服务
    kubectl get svc -A |grep kubernetes-dashboard
    
    3) #查看kubernetes-dashboard-658485d5c7-pq55z的log信息
    kubectl logs -f -n kubernetes-dashboard kubernetes-dashboard-658485d5c7-pq55z
    
    
    #登录ui
    https://3.238.176.211:30001/#/login  一定是https请求,否则无响应
    
    #创建管理员token，可查看任何空间权限
    
    kubectl create clusterrolebinding dashboard-cluster-admin  --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:kubernetes-dashboard
    
    #查看kubernetes-dashboard名称空间下的secret
    kubectl get secret -n kubernetes-dashboard
    
    admin-token-mpskd                  kubernetes.io/service-account-token   3      2m55s
    default-token-87n6p                kubernetes.io/service-account-token   3      22m
    kubernetes-dashboard-certs         Opaque                                0      22m
    kubernetes-dashboard-csrf          Opaque                                1      22m
    kubernetes-dashboard-key-holder    Opaque                                2      22m
    kubernetes-dashboard-token-67vpt   kubernetes.io/service-account-token   3      22m
    
    #找到对应的带有token的kubernetes-dashboard-token-67vpt
    kubectl describe secret kubernetes-dashboard-token-67vpt -n kubernetes-dashboard
    
    eyJhbGciOiJSUzI1NiIsImtpZCI6Ilc4Tm1oakpEMDJSNDhSQVlSWDhSTTR5dm5FVjc2SGVBZTExQVhLQklOX0EifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZC10b2tlbi1scG5obCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjYzMGQyNzYxLTA3ZTMtNDVhOS05NjczLWUyMGZmYmIxNWExZSIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDprdWJlcm5ldGVzLWRhc2hib2FyZCJ9.r80pKVeOVPxrZVBs0MUFjMNC-SfaMgO-9j4GdLoM8udcFZUAx16DgVvY8RirouEZx7jvFbw2ycUWr6IDWiqgx4KKR7cAfpZ2J4OpxUniUlZnhZKEJvWQtvFzfWpygCJctcL30NIGUHTEz1IF5VmQ7Ngb-AGcwfLFFr6D5cwr2ScRDpVPWCXrUNi2te9SLhEFGob4AXVSLj8oH9WgbKE1SuCbf0LYbHWK2eRSRtWjQsh0UobeGLU0JwDnP_tiMpDV4-3q4ns54NdW_AbR8eLbNB6IvMAyiJTwsY3hd1i9WPP0Z1GLIwjl9OvbLEb6KOKzDnLeydEKffo1ngf6jdJByw
    
    #将生成的token 复制到页面中,进行登录
    https://3.238.176.211:30001/#/secret?namespace=default
    
    #创建pod ,新建httpd.yml,如下
    apiVersion: v1
    kind: Pod
    metadata:
      name: pod-httpd
      namespace: default
      labels:
        app: httpdlab
    spec:
      nodeName:ip-172-31-64-176
      containers:
      - name: httpd
        image: httpd:latest
        imagePullPolicy: IfNotPresent
    
    #执行
    kubectl apply -f httpd.yml
    
    #查看
    kubectl get pods
    
    
    
    
    
    #修改访问端口
    kubectl edit svc kubernetes-dashboard -n kubernetes-dashboard
    
    
    
    
    ```

    

15. dashboard 日志查看

    ```perl
    #查看dashboard 的pod信息
    kubectl get pod -A |grep kubernetes-dashboard
    
    kubernetes-dashboard   dashboard-metrics-scraper-79c5968bdc-bnvss   1/1     Running            0          51m
    kubernetes-dashboard   kubernetes-dashboard-658485d5c7-pq55z        1/1     Running            0          51m
    
    #查看dashboard 暴露的服务
    kubectl get svc -A |grep kubernetes-dashboard
    
    #查看kubernetes-dashboard-658485d5c7-pq55z的log信息
    kubectl logs -f -n kubernetes-dashboard kubernetes-dashboard-658485d5c7-pq55z
    ```

    

16. nginx yaml 部署实例

    1) node port 方式部署

    ```perl
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: nginx-servie
      name: nginx-service
      # 命名空间，没有可以删除，默认是default
      namespace: default
    spec:
      ports:
      # 对外暴露的端口
      - nodePort: 30002
        port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx-pod
      # NodePort类型可以对外暴露端口
      type: NodePort
    
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: nginx-deploy
      name: nginx-deploy
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx-pod
      template:
        metadata:
          labels:
            app: nginx-pod
          namespace: default
        spec:
          containers:
        # 镜像名称
          - image: nginx:1.22.0
            name: nginx
            ports:
            - containerPort: 80
            resources: {}
    ```

    

    2) configmap 方式

    ```perl
    # 1) 定义nginx的configmap配置
    
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: nginx-configmap
    data:
      nginx_conf: |-
        #user  nobody;
        worker_processes  1;
        events {
            worker_connections  1024;
        }
        http {
            include       mime.types;
            default_type  application/octet-stream;
            sendfile        on;
            keepalive_timeout  65;
            server {
                listen       80;
                server_name  localhost;
                location / {
                    root   html;
                    index  index.html index.htm;
                }
                error_page   500 502 503 504  /50x.html;
                location = /50x.html {
                    root   html;
                }
            }
        }
        
        # 2) nginx servce和deploy 配置
        apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: nginx-servie
      name: nginx-service
      # 命名空间，没有可以删除，默认是default
      namespace: default
    spec:
      ports:
      # 对外暴露的端口
      - nodePort: 30002
        port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx-pod
      # NodePort类型可以对外暴露端口
      type: NodePort
    
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: nginx-deploy
      name: nginx-deploy
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx-pod
      template:
        metadata:
          labels:
            app: nginx-pod
          namespace: default
        spec:
          containers:
        # 镜像名称
          - image: nginx:1.22.0
            name: nginx
            ports:
            - containerPort: 80
            resources: {}
            volumeMounts:
            - name: nginx-config
              mountPath: "/etc/nginx/conf.d/"
              readOnly: true
          volumes:
          - name: nginx-config
            configMap:
              name: nginx-configmap
    
         
    ```

    

17. Ingress 的安装和使用

    ```perl
    # 下载ingress
    kubectl apply -f deploy.yaml
    #修改镜像
    vi deploy.yaml
    #将image的值改为如下值：
    registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images/ingress-nginx-controller:v0.46.0
    #执行
    kubectl apply -f deploy.yaml
    
    # 检查安装的结果
    kubectl get pod,svc -n ingress-nginx
    
    NAME                                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
    service/ingress-nginx-controller             NodePort    10.96.231.254   <none>        80:31623/TCP,443:30811/TCP   6m34s
    service/ingress-nginx-controller-admission   ClusterIP   10.96.72.253    <none>        443/TCP                      6m34s
    
    # 最后别忘记把svc暴露的端口要放行
    ```

    

18. Ingress 的使用

    ```perl
    # 创建service和depoly
    #测试环境
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-server
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: hello-server
      template:
        metadata:
          labels:
            app: hello-server
        spec:
          containers:
          - name: hello-server
            image: registry.cn-hangzhou.aliyuncs.com/lfy_k8s_images/hello-server
            ports:
            - containerPort: 9000
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: nginx-demo
      name: nginx-demo
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx-demo
      template:
        metadata:
          labels:
            app: nginx-demo
        spec:
          containers:
          - image: nginx:1.22.0
            name: nginx
    ---
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: nginx-demo
      name: nginx-demo
    spec:
      selector:
        app: nginx-demo
      ports:
      - port: 8000
        protocol: TCP
        targetPort: 80
    ---
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: hello-server
      name: hello-server
    spec:
      selector:
        app: hello-server
      ports:
      - port: 8000
        protocol: TCP
        targetPort: 9000
        
    # 域名访问
    
    apiVersion: networking.k8s.io/v1
    kind: Ingress  
    metadata:
      name: ingress-host-bar
    spec:
      ingressClassName: nginx
      rules:
      - host: "hello.atguigu.com"
        http:
          paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: hello-server
                port:
                  number: 8000
      - host: "demo.atguigu.com"
        http:
          paths:
          - pathType: Prefix
            path: "/"  # 把请求会转给下面的服务，下面的服务一定要能处理这个路径，不能处理就是404
            backend:
              service:
                name: nginx-demo  ## java，比如使用路径重写，去掉前缀nginx
                port:
                  number: 8000
            
    #配置本地域名
    vi /etc/hosts
    3.238.176.211 hello.atguigu.com
    3.238.176.211 demo.atguigu.com
    
    
              
    # 测试访问:
    查询ingress service的node port端口
     kubectl get pod,svc -n ingress-nginx
    
    NAME                                         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
    service/ingress-nginx-controller             NodePort    10.96.231.254   <none>        80:31623/TCP,443:30811/TCP   170m
    service/ingress-nginx-controller-admission   ClusterIP   10.96.72.253    <none>        443/TCP                      170m
    
    
    #在防火墙中开放31623端口
    
    #访问
    http://hello.atguigu.com:31623/
    Hello World!
    
    http://demo.atguigu.com:31623/
    Welcome to nginx!
    
    ```

    

19. service 中port 和nodeport的区别

    ```perl
     port 是 Service 暴露给集群内其他组件（例如其他 Pod）的端口号,例如ingress 直接可以用.
     它表示你可以通过 Service 名称和这个端口号来访问 Service。port 是 Service 自身的端口，用于集群内部的 Pod 通信。外部流量无法直接通过这个端口访问 Service。
     
     NodePort 是一种 Kubernetes Service 类型，用于将服务暴露到集群外部。它在每个节点上开放一个高位端口，然后将外部流量通过这个节点端口转发到 Service 的 port 上。
    ```

    

20. pv 和pvc

    ```perl
    #安装nfs (每个机器都安装)
    sudo apt update
    
    #在主节点中安装 
    sudo apt install nfs-kernel-server nfs-common
    
    #在主节点中操作
    #创建同步文件夹
    mkdir -p /nfs/data
    #配置NFS 服务器
    #nfs主节点
    echo "/nfs/data/ *(insecure,rw,sync,no_root_squash)" > /etc/exports
    
    systemctl enable rpcbind --now
    systemctl enable nfs-server --now
    #导出生效(主节点操作)
    sudo exportfs -ra
    #启动nfs(主节点操作)
    sudo systemctl start nfs-kernel-server
    
    #在从从节点中安装
    
    sudo apt install nfs-common
    
    mkdir -p /nfs/data
    #执行以下命令挂载 nfs 服务器上的共享目录
    mount -t nfs 172.31.70.77:/nfs/data /nfs/data #172.31.70.77 是aws的私有地址
    
    # 写入一个测试文件
    echo "hello nfs server" > /nfs/data/test.txt
    
    #pv 和pvc
    #PV：持久卷（Persistent Volume），将应用需要持久化的数据保存到指定位置
    #PVC：持久卷申明（Persistent Volume Claim），申明需要使用的持久卷规格
    
    #创建pv
    #pv.yml
    
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: pv01
    spec:
      capacity:
        storage: 1000M
      accessModes:
        - ReadWriteMany
      storageClassName: nfs
      nfs:
        path: /nfs/data/01
        server: 172.31.70.77
    
    #执行
    kebuctl apply -f pv.yml
    
    #pvc 创建与绑定
    
    kind: PersistentVolumeClaim
    apiVersion: v1
    metadata:
      name: logs-pvc
    spec:
      accessModes:
        - ReadWriteMany
      resources:
        requests:
          storage: 900Mi
      storageClassName: nfs
    
    #创建一个service和deployment,测试
    
    
    ```

    

21. 创建一个service和deployment,测试

    ```perl
    apiVersion: v1
    kind: Service
    metadata:
      labels:
        app: nginx-servie
      name: nginx-service
      # 命名空间，没有可以删除，默认是default
      namespace: default
    spec:
      ports:
      # 对外暴露的端口
      - nodePort: 30002
        port: 80
        protocol: TCP
        targetPort: 80
      selector:
        app: nginx-pod
      # NodePort类型可以对外暴露端口
      type: NodePort
    
    ---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: nginx-deploy
      name: nginx-deploy
      namespace: default
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx-pod
      template:
        metadata:
          labels:
            app: nginx-pod
          namespace: default
        spec:
          containers:
        # 镜像名称
          - image: nginx:1.22.0
            name: nginx
            ports:
            - containerPort: 80
            resources: {}
            volumeMounts:
            - name: html
              mountPath: /usr/share/nginx/html
          volumes:
            - name: html
              persistentVolumeClaim:
                claimName: nginx-pvc
    
         
    ```

    

22. 创建文件

    ```perl
    #在任何一台机器上
    #/nfs/data/01
    #创建index.html 文件
    <html>123</html>
    
    #访问
    http://3.238.176.211:30002/
    123
    
    ```

    

23. 

24. 

    















 






















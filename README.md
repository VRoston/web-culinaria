# web-culinaria

## Setup para VMs

- Instalaçao dos requerimentos:
  ```sh
  sudo apt update
  sudo apt install nano
  sudo apt install net-tools
  sudo apt install iputils-ping
  ```
  - Específico para o Proxy:
    ```sh
    sudo apt update
    sudo apt nginx
    ```
    
    Para verificar se o nginx está funcionando:
      ```sh
      sudo systemctl status nginx
      ```

- Alterando a configuração de rede das máquinas:
  ```sh
  sudo nano /etc/netplan/50-cloud-init.yaml
  sudo netplann apply
  ```
  
- Configuração que você precisa colocar no `cloud-init.yaml`:
  - Proxy:
    ```yaml
    network:
      ethernets:
        enp0s3:
          dhcp4: true
          dhcp-identifier: mac
        enp0s8:
          dhcp4: no
          addresses:
            - 192.168.10.101/24
      version: 2
    ```
    
  - App:
    ```yaml
    network:
      ethernets:
        enp0s3:
          dhcp4: true
          addresses:
            - 192.168.10.102/24
    version: 2
    ```
    
  - Database:
    ```yaml
    network:
      ethernets:
        enp0s3:
          dhcp4: true
          addresses:
            - 192.168.10.103/24
    version: 2
    ```

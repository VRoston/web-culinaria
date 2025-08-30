# web-culinaria

## Setup para VMs

### Setup with Vagrant

- Para subir o ambiente use o comando:
```sh
  vagrant up
```

- Para conectar no terminal de uma das máquinas: 
  Os nomes de cada vm estam no Vagrantfile.
```sh
  vagrant ssh <vmname>
```

- Para derrubar o ambiente use o comando: 
```sh
  vagrant destroy
```

- Para acessar o site, entre no ip ```192.168.56.9```

### Manual Setup

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
    sudo apt install nginx
    ```
    
    Para verificar se o nginx está funcionando:
      ```sh
      sudo systemctl status nginx
      ```

  - Específico para o App:
    ```sh
    sudo apt update
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    \. "$HOME/.nvm/nvm.sh"
    nvm install 20
    sudo apt install npm
    sudo apt install python3            # should be unnecessary as python is usually already installed
    sudo apt install python3-pip
    ```

    Para verificar se os requerimentos do app estam funcionando:
      ```sh
      node -v                           # Might need a restart of the machine for it to show the proper version
      npm -v
      python3 -V
      pip -V
      ```

  - Específico para a Database:
    ```sh
    sudo apt update
    sudo apt install sqlite3
    ```

    Para verificar se o sqlite está funcionando:
      ```sh
      sqlite3 webculinaria.db
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
            - 192.168.56.10/24
      version: 2
    ```
    
  - App:
    ```yaml
    network:
      ethernets:
        enp0s3:
          dhcp4: no
          addresses:
            - 192.168.56.11/24
    version: 2
    ```
    
  - Database:
    ```yaml
    network:
      ethernets:
        enp0s3:
          dhcp4: no
          addresses:
            - 192.168.56.12/24
    version: 2
    ```

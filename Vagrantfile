# -*- mode: ruby -*-

# vi: set ft=ruby :

# Services config
SERVICES = {
  'proxy' => {
    ip: '192.168.0.10'
  },
  'app' => {
    ip: '192.168.0.11'
  },
  'db' => {
    ip: '192.168.0.12'
  }
}

Vagrant.configure("2") do |config|
  config.vm.box = "bento/ubuntu-22.04"
  config.vm.box_version = "202508.03.0"

  config.vm.provision "shell", name: "common", path: "common-dependencies.sh"
  # config.vm.synced_folder ".", "/home/vagrant/web-culinaria", create: true
  config.vm.synced_folder "./", "/home/vagrant/web-culinaria", type: "rsync", rsync__auto: true, rsync__exclude: ['node_modules*']
  
  config.vm.define "proxy" do |proxy|
    proxy.vm.hostname = "proxy"
    proxy.vm.network "private_network", ip: "192.168.56.9", adapter:2
    proxy.vm.network "private_network", ip: SERVICES['proxy'][:ip], virtualbox__intnet: true, adapter: 3
    # config.vm.network "forwarded_port", guest: 80, host: 8080
    proxy.vm.provision "shell", name: "proxy-dep", path: "proxy-dependencies.sh"
  end

  config.vm.define "app" do |app|
    app.vm.hostname = "app"
    app.vm.network "private_network", ip: SERVICES['app'][:ip], virtualbox__intnet: true, adapter:2
    app.vm.provision "shell", name: "app-dep", path: "app-dependencies.sh"
    # app.vm.synced_folder ".", "home/proxy/web-culinaria", create: true
  end

  config.vm.define "db" do |db|
    db.vm.hostname = "db"
    db.vm.network "private_network", ip: SERVICES['db'][:ip], virtualbox__intnet: true, adapter:2
    db.vm.provision "shell", name: "db-dep", path: "db-dependencies.sh"
    # db.vm.synced_folder ".", "home/proxy/web-culinaria", create: true
  end

  # config.vm.define "app" do 

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = true
  
    # Customize the amount of memory on the VM:
    vb.memory = "2048"
  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    ip link set eth0 down || true
  SHELL
end

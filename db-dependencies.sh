apt-get install sqlite3
apt-get install python3-pip -y
cd /home/vagrant/web-culinaria/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r /home/vagrant/web-culinaria/backend/requirements.txt
mkdir -p /home/vagrant/web-culinaria/logs
chown -R vagrant:vagrant /home/vagrant/web-culinaria/backend /home/vagrant/web-culinaria/logs
nohup flask run --host=192.168.0.12 > ../logs/app.log 2>&1 &
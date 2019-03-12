#!/usr/bin/env bash

####################
# Server Utilities #
####################

# Zip
apt-get install -y zip

##########
# Apache #
##########
apt-get install -y apache2

# Link document root to shared Vagrant folder.
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi
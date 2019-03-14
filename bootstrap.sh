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

#######
# PHP #
#######
apt-get install -y php libapache2-mod-php php-mbstring php-xml

#################
# PHP Utilities #
#################

# Composer
if ! [ -f /usr/local/bin/composer ]; then
  cd $HOME
  curl -sS https://getcomposer.org/installer | php
  mv composer.phar /usr/local/bin/composer
fi

###############
# Final Steps #
###############
service apache2 restart
#!/bin/bash

ssh-keyscan gitlab.ctlabs.in >>"${HOME}"/.ssh/known_hosts &&
  known_hosts=$(sort <"${HOME}"/.ssh/known_hosts | uniq) &&
  echo "${known_hosts}" >"${HOME}"/.ssh/known_hosts

PROJECT_DIR=${HOME}/juno/website
if [[ ! -d ${PROJECT_DIR} ]]; then
  cd "${HOME}" &&
    git clone git@gitlab.ctlabs.in:juno/website.git
fi

cd "${PROJECT_DIR}" &&
  git stash &&
  git checkout development &&
  git pull origin development &&
  yarn &&
  yarn build &&
  mkdir -p /var/www/html/ &&
  sudo rm -rf /var/www/html/juno/website/build/ &&
  sudo mv "${PROJECT_DIR}"/build/ /var/www/html/juno/website/build/

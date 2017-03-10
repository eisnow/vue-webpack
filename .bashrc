# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

alias lr='ls -rtl --color=tty'
alias psg='ps -ef |grep '
alias tailf='tail -f '
alias ifconfig='/sbin/ifconfig '
alias sudou='sudo -s -u '

alias gs='git status'
alias gc='git commit'
alias gcm='git commit -m'
alias gcma='git commit --amend'
alias gl='git log'
alias ga='git add'
alias gaa='git add --all'
alias gco='git checkout'
alias gr='git reset'
alias gps='git push'
alias gpsf='git push --force'
alias gpss='git push --set-upstream origin'
alias gpso='git push origin'
alias gpst='git push --tags'
alias gt='git tag'
alias gpl='git pull'
alias gb='git branch'
alias gbr='git branch -r'
alias gbd='git branch -d'
alias gm='git merge'
alias gma='git merge --abort'
alias gd='git diff'
alias gcp='git cherry-pick'
alias gf='git fetch'
alias gfp='git fetch -p'
alias gfom='git fetch origin master'
alias gmf='git merge FETCH_HEAD'
alias gsts='git stash save -u'
alias gstp='git stash pop'
alias gstl='git stash list'
alias gcp='git cherry-pick'


#!/bin/sh
#!/usr/bin/env fish
ng build --configuration production --aot
firebase use prod
firebase deploy

#!/bin/sh
#!/usr/bin/env fish
ng build --configuration qa --aot
firebase use qa
firebase deploy

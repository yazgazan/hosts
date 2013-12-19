
SIBILANT=	sibilant

all:
	$(SIBILANT) --output . main.sibilant
	(echo "#!/home/yazou/local/bin/node"; cat main.js) > hosts
	chmod +x hosts


perms.min.js: perms.js
	uglifyjs -cm < perms.js > perms.min.js

clean:
	rm -f perms.min.js

.PHONY: clean

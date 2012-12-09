default: min
min:
	uglifyjs -cm < index.js > perms.min.js
clean:
	rm -f perms.min.js

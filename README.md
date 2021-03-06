ShortSword
==========

ShortSword is a canvas-based realtime animation engine for voxels and effects.
Written in javascript, using npm and grunt

###Development###

To develop and test, run ```grunt```

This will browserify, serve and watch the library.

Once it is running, go to [http://127.0.0.1:9000/examples/](http://127.0.0.1:9000/examples/) and check each example.

Development is example-driven. When adding a feature, create a basic, clear, concise example demonstrating its use. If you feel you might have broken other feature examples, please go through previous examples to make sure they run. If they don't run anymore, please mend the library to fix the broken examples OR change the examples' code to work with the new library.

###Build###

Run ```grunt build```

This will browserify the library into ```dist/```

###Usage###

```dist/ShortSword.js``` is the engine module. Simply include it in your page and follow the code in any of the ```examples/``` folder to get started.
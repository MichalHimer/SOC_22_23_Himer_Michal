console.log("Script loaded!");
Java.perform(function(){
                var mainapp = Java.use("com.cyphertech.rootdetector.MainActivity");
                mainapp.checkBuildConfig.implementation = function(){
                                console.log("Injection successful!");
                                var ret = false;
                                return ret;
                };
                send("Rootdetectioncheckresultsasfalse-ovator!");
});

var repo_site = "https://ssaku6.github.io/jpq7/";


 /* define welcome message trial */
 var welcome = {
    type: "html-keyboard-response",
    stimulus: "Welcome to the experiment. Press any key to begin."
  };
  
  

jsPsych.init({
    timeline: [ welcome],
});

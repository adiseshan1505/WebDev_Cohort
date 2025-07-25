<h1>Ok so some basics about JS</h1>
JS is a single-threaded language, unlike low level languages like Go-Lang, Rust, C/C++ that are multithreaded.
<br>
So why Node.js the JS runtime is single threaded.
<br>
So we know in OS that a CPU has multiple cores, these multiple cores are used to compute process(s).
These processes could be huge or very small.
<br>
Case 1:-
eg:- 
<pre>
<code>
function compute(n){
    var ans=0;
    for(var i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}
const res=compute(10);
console.log(res);
</code>
</pre>

above snippet runs fast since process is small so it returns sum of 10 with ease.
<br>
Case 2:- 
but same code if it is:- 
<pre>
<code>
const res=compute(10000000000000000);
console.log(res);
</code>
</pre>

<br>
CPU fumes(try this snippet on replit, with both cases to differentiate how JS works)
<br>
Why?
<br>
<p>Node.js (JS runtime is Single-Threaded).
So, to do any process Node.js will access only one single core of the CPU to execute the process regardless how huge,
the process is.
So in Case2:- it will take a lot of time to run as good as not running unlike Case1.
Since it accesses only one single core of your system, Node.js is single threaded.</p>
<br>
<p>So, JS has originally been designed to run in browsers(through Node.js the runtime of JS), which has a 
single-threaded event loop to handle UI updates, user events without race conditions.
Hence, only one operation or process runs at a time.</p>

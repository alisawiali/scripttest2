/*
Arithmetic operation عملية حسابية
+ Addition إضافة
- Subtraction الطرح
* Multipliation عمليه الضرب
/ Division قسم
** Exponentiation (ES7) الأس

% Modulus (Division Remainder) معامل
++ Increment [Post / Pre]  زيادة راتب
-- Decreement [Post / Pre] التناقص

*/

console.log("------");
/*

- + unary Plus  أحادي [ Return Number If ist Not Number];
- - Unary negation نفي أحادي [ Retrun Number if ist not number + Negates it];

Tests

-- Normal Number  رقم عادي
-- String Number رقم السلسلة
-- String Nagative Number رقم Nagative للسلسلة
-- String Text نص السلسلة
-- Float تطفو
-- Hexadecimal Numeral System => Oxff النظام العددي السداسي العشري => أوكسف
-- null
-- false
-- true

*/

console.log("------");
/*
type coercion اكتب الإكراه

*/

let a = "10";
let x = 20;
let z = true;

console.log(Number(a) + x); //30
console.log(a - x); // -10

console.log("" - a); // -10       "" ---> das bedeuet 0
console.log("" - 2); // -2  z.b

console.log("-------------");
/*
assignment operators  عوامل التخصيص

*/

let e = 10;

e = 10 + 20;

e += 10; // e + e = 10;
e -= 10;
e /= 10;
console.log(e);

let d = "-100";
let l = "20";
let c = 30;
let r = true;

console.log(-d * 20); // 2000

console.log(++l + c + l + -d + r); // 173

console.log("-------------");
console.log("string , tostring");

/*
toString Syntax +  Charactar- Esrape Sequnences بناء جملة 

*/

console.log('hallo welt \\"imad \\"');
console.log("hallo imad in Berlin \\ mit 'neuen' jahr");
console.log("hallo imad in Berlin \n mit 'neuen' jahr");

console.log("-----conatenation--------");

/*
conatenation ----> سلسلة
*/

let o = "omer";
let ö = "lorem ich bin hier";

console.log(o + " " + ö);

let imad = `
<div class="card">
    <h2> ${o} </h2>
    <p> ${ö} </p>
</div>
`;

console.log("------Arithmetic -opration-------");

/*
Arithmetic -opration

Increment (Post / Pre)
Decrement  (Post / Pre)
*/
console.log (10 + 20);
console.log (10 + "Osame");

console.log (10 - 20);
console.log (10 - "Omer"); // NaN


console.log("-----------------")


/*
Type coercion (Type casting)اكتب الصب

*/

let y = "10";
let w = 20;
let t = true;

console.log(+y + w);
console.log(w + t + " ");

console.log("" + +y) // plis 1

console.log(+y + w  + t);
 
console.log('"------Assignment Operators-----------"')

/*
Assignment Operators مشغلي التخصيص
*/


let u = 20;
 u += 80; //  u  = 20 + 80
 u -= 80; // u  = 20 - 80
 u /= 80; // u  = 20 7 80

console.log(u)

console.log('"-----Number Methods------"')

/*

-- Double Precision دقة مزدوجة
-- Syntactic Sugar  التجميل اللغوى "-"
-- e 
-- **
With Decimal  مع عشري
Number Min Value رقم الحد الأدنى للقيمة
Number MAX value عدد MAX القيمة

*/


console.log(1000000);
console.log(1e3); // 1000 (3 ist drei null)
console.log(10 ** 5); // 10 * 10 * 10  *10  *10

console.log(Number.MAX_SAFE_INTEGER); // das ist sichere numer
console.log(Number.MAX_VALUE) //  das ist leste nummer und danach kommt kein nummer

console.log('"-----Number Methods------"')


/*
 -- Two Dats To Call a Methods
 -- toString() -- إلى سلسلة
 -- toFixed() للتصليح
 -- parsenInt() بارسن إنت
 -- parseFloat() تحليل عائم
 -- isInteger()[ ES6]
 -- isNaN () [ES6]

*/
console.log((100).toString()); // bringen die nummer zu string.
console.log(100..toString());

console.log(100.05500.toFixed(2));

console.log(parseInt("100")); // bringt nummer  zurück (richt nummer)
console.log(parseFloat(100.20)); // hier bringt die mit 10.10

console.log(Number.isInteger("100")); // false
console.log(Number.isInteger("100.20")); // false
console.log(Number.isInteger(100));  // treu

console.log(Number.isNaN(100 / "omer"));// treu
console.log(Number.isNaN( "omer"));// false



console.log('"----Math Object-----"')

/*
-- round 
-- ceil 
-- floor
-- min 
-- max
-- pow
-- random()
-- trunc()
*/

console.log(Math.round(100.8))// bringt es zu oben -->  101
console.log(Math.round(100.4))// bringt es zu unten ---> 100

console.log(Math.ceil(55.3));
console.log(Math.floor(55.3)); 

console.log(Math.min(10, 20,33,21,100)); //  nimmt die klienste zahl
console.log(Math.max(10, 20,33,21,100));// nimmt die größte zahl


console.log(Math.pow(3 , 3)) // 3 ** 3 

console.log(Math.random()); // bringt  durcheinande zahl


console.log(Math.trunc(99.8)) // bringt nur das zahl was man gibt und integer



console.log("---------------")


/**حل التمارين */
let s = 1_00;
let b = 2_00.5;
let f = 1e2;
let g = 2.4;


console.log(Math.floor(Math.min(s, b, f, g))); // auch right mit floor 
console.log(Math.trunc(Math.min(s,b,f,g)));// auch right mit trunc

console.log(s ** parseInt(g)); //zeigt 10000 die lösung

console.log(Math.trunc(g));
console.log(Math.round(g));
console.log(Math.floor(g));
console.log(parseInt(g));


console.log((parseInt(b )/Math.ceil(g)).toFixed(2)); //string
console.log(Math.round(parseInt(b)/Math.ceil(g))); // nummer


console.log("-------String Methods--------")


/*
-- Access with index الوصول مع الفهرس
-- Access with chart الوصول مع الرسم البياني
-- Length الطول
--  trim تقليم
-- touppercase إلى الحالة العليا
-- tolowwecase حقيبة حمل
-- chain Methods طرق السلسلة

*/


let name = "Alis ";


console.log(name[1]); // index
console.log(name[5]); //undefined

console.log(name.charAt(1)) ;// positionen 
console.log(name.charAt(5)); //  null 

console.log(name.length);

console.log(name.trim());

console.log(name.toUpperCase());
console.log(name.toLowerCase());




console.log(name.trim().charAt(3).toUpperCase()); // alle element in einem account

console.log("------'-String Methods-'-------")

/*
String Methode 
-- indexOf (value [Mand], Start [Opt]0)
-- lastIndexOf( value [Mand]start[Opt] length) 
-- slice (start [mand], End [Opt] Not include End) شريحة
-- repeat (Times) [ES6]
-- split ( Separator [Opt], Limit [Opt])

*/
let aa = "wllcomen in Berlin";
let ff = "hallo welt";

console.log(aa.indexOf("in"));
console.log(aa.indexOf("n",11));

console.log(aa.lastIndexOf("i"));


// slice --- cat
console.log(aa.slice(3,8)); // das liste wird nicht geholt
console.log(aa.slice(3)); // fängt von drei bis zum Ende
console.log(aa.slice(-6)); // hat nur Berlin gebracht
console.log(aa.slice(-6,-3));


//repaet
console.log(aa.repeat(2));

//split الانقسام
console.log(aa.split("",8));
console.log( `${aa}, ${ff}`.split(" ")); // 


console.log("-----------substring------------")


/*
النقاط التي ناقشها الفيديو:
قطع النص حسب الاحداثيات المعطاة :()SubString
قطع النص حسب الاحداثيات المعطاة والفرق تقدر ان تعطي العناصر الذي تريد حذفها ,و الادخال في السالب:()SubStr


*/

/*
-- subString (start[mand],End [opt] not including End)
-- start > End will Swap
-- start < 0 It start form 0
-- Use Length to egt last charcater
-- start <= length = ""
-- Negativive start form  end
-- includes (value [Mand ], start [opt] Default 0) [ES6]
-- startsWith (value [Mand], Length [Default 0] [ES6]
-- endswith (value [Mand], Length [Opt], Default full ) [ES6])

*/

let rr = "Im leve java script";

console.log(rr.length);

console.log(rr.substring(3)); // 
console.log(rr.substring(3,8)); // fängt von l zum 8 j cat auch zb.
console.log(rr.substring(-100,7)) // hier fängt von null bis zum ziel 0-7
console.log(rr.substring(19-1)); //  weil 19 buchstaben ist bringt nur das liste
console.log(rr.substring(rr.length -6, rr.length -4)) // sc


//substr muss der anfag zahl geben und end ansonsten bringt das alles 
console.log(rr.substr(0)); // 
console.log(rr.substr(0, 2 )); 


/*
التحقق اذا كانت القيمة المعطاة موجودة ام لا في النص المكتوب :()Includes

 */
console.log(rr.includes("Im")); // true
console.log(rr.includes("Im", 4)); // false search nach im ist false

/**
 التحقق اذا كانت القيمة المعطاة موجودة ام لا في النص المكتوب وتحسب من البداية :()StartWiths
التحقق اذا كانت القيمة المعطاة موجودة ام لا في النص المكتوب وتحسب من النهاية :()EndWiths 
 */

console.log(rr.startsWith("I")) ;// fängt mit I ----> true
console.log(rr.startsWith("L",3)); //true
console.log(rr.startsWith("leve",3));// true

console.log(rr.endsWith("script",19)); //true
console.log(rr.endsWith("t",19));// true
console.log(rr.endsWith("s",19));// false

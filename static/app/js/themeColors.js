const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}
function dynamicPrimaryColor(primaryColor) {
    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
            const cssPropName8 = `--darkprimary-${e.target.getAttribute('data-id8')}`;
            const cssPropName3 = `--dark-${e.target.getAttribute('data-id3')}`;
            const cssPropName4 = `--transparent-${e.target.getAttribute('data-id4')}`;
            const cssPropName5 = `--transparent-${e.target.getAttribute('data-id5')}`;
            const cssPropName6 = `--transparent-${e.target.getAttribute('data-id6')}`;
            const cssPropName9 = `--transparentprimary-${e.target.getAttribute('data-id9')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
                [cssPropName3]: e.target.value,
                [cssPropName4]: e.target.value,
                [cssPropName5]: e.target.value,
                [cssPropName6]: e.target.value + 95,
                [cssPropName7]: e.target.value + 20,
                [cssPropName8]: e.target.value + 20,
                [cssPropName9]: e.target.value + 20,
            });
           
        });
    });
}

(function() {
    // Light theme color picker
    // const LightThemeSwitchers = document.querySelectorAll('.light-mode .switch_section span');
    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');

    // themeSwitch(LightThemeSwitchers);
    dynamicPrimaryColor(dynamicPrimaryLight);

    // dark theme color picker

    // const DarkThemeSwitchers = document.querySelectorAll('.dark-mode .switch_section span')
    const DarkDynamicPrimaryLight = document.querySelectorAll('input.color-primary-dark');

    // themeSwitch(DarkThemeSwitchers);
    dynamicPrimaryColor(DarkDynamicPrimaryLight);

    // tranparent theme color picker

    // const transparentThemeSwitchers = document.querySelectorAll('.transparent-mode .switch_section span')
    const transparentDynamicPrimaryLight = document.querySelectorAll('input.color-primary-transparent');

    // themeSwitch(transparentThemeSwitchers);
    dynamicPrimaryColor(transparentDynamicPrimaryLight);

    // tranparent theme bgcolor picker

    // const transparentBgThemeSwitchers = document.querySelectorAll('.transparent-mode .switch_section span')
    const transparentDynamicPBgLight = document.querySelectorAll('input.color-bg-transparent');

    // themeSwitch(transparentBgThemeSwitchers);
    dynamicPrimaryColor(transparentDynamicPBgLight);

    localStorageBackup();

    $('#myonoffswitch1').on('click', function(){
        document.querySelector('body')?.classList.remove('dark-mode');
        document.querySelector('body')?.classList.remove('transparent-mode');
        document.querySelector('body')?.classList.remove('bg-img1');
        document.querySelector('body')?.classList.remove('bg-img2');
        document.querySelector('body')?.classList.remove('bg-img3');
        document.querySelector('body')?.classList.remove('bg-img4');
        
        localStorage.removeItem('dayoneBgImage');
        $('#myonoffswitch1').prop('checked', true);

        localStorage.setItem('dayonelightMode', true);
        localStorage.removeItem('dayonedarkMode');
        localStorage.removeItem('dayonetransparentMode');
    })
    $('#myonoffswitch2').on('click', function(){
    document.querySelector('body')?.classList.remove('light-mode');
    document.querySelector('body')?.classList.remove('transparent-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
    
    localStorage.removeItem('dayoneBgImage');
    $('#myonoffswitch2').prop('checked', true);
    
    localStorage.setItem('dayonedarkMode', true);
    localStorage.removeItem('dayonelightMode');
    localStorage.removeItem('dayonetransparentMode');
    })
    $('#myonoffswitchTransparent').on('click', function(){
    document.querySelector('body')?.classList.remove('dark-mode');
    document.querySelector('body')?.classList.remove('light-mode');
    document.querySelector('body')?.classList.remove('bg-img1');
    document.querySelector('body')?.classList.remove('bg-img2');
    document.querySelector('body')?.classList.remove('bg-img3');
    document.querySelector('body')?.classList.remove('bg-img4');
    
    localStorage.removeItem('dayoneBgImage');
    $('#myonoffswitchTransparent').prop('checked', true);
    
    localStorage.setItem('dayonetransparentMode', true);
    localStorage.removeItem('dayonelightMode');
    localStorage.removeItem('dayonedarkMode');
    })
        
})();

function localStorageBackup() {
    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.dayoneprimaryColor) {
        // document.getElementById('colorID').value = localStorage.dayoneprimaryColor;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.dayoneprimaryColor);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.dayoneprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.dayoneprimaryBorderColor);
        document.querySelector('html').style.setProperty('--primary-transparentcolor', localStorage.dayoneprimaryTransparent);
        // document.querySelector('body').setAttribute('class', 'app sidebar-mini light-mode');
        document.querySelector('body').classList.add("light-mode")
        document.querySelector('body').classList.remove("dark-mode")
        document.querySelector('body').classList.remove("transparent-mode")
        $('#myonoffswitch3').prop('checked', true);
        $('#myonoffswitch6').prop('checked', true);
        $('#myonoffswitch1').prop('checked', true);
    }

    if (localStorage.dayonedarkPrimary) {
        // document.getElementById('darkPrimaryColorID').value = localStorage.dayonedarkPrimary;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.dayonedarkPrimary);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.dayonedarkPrimary);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.dayonedarkPrimary);
        document.querySelector('html').style.setProperty('--dark-primary', localStorage.darkPrimary);
        document.querySelector('html').style.setProperty('--darkprimary-transparentcolor', localStorage.dayonedarkprimaryTransparent);
        // document.querySelector('body').setAttribute('class', 'app sidebar-mini dark-mode');
        document.querySelector('body').classList.remove("light-mode")
        document.querySelector('body').classList.add("dark-mode")
        document.querySelector('body').classList.remove("transparent-mode")

        $('#myonoffswitch2').prop('checked', true);

    }


    if (localStorage.dayonetransparentPrimary) {
        // document.getElementById('transparentPrimaryColorID').value = localStorage.dayonetransparentPrimary;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.dayonetransparentPrimary);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.dayonetransparentPrimary);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.dayonetransparentPrimary);
        document.querySelector('html').style.setProperty('--transparent-primary', localStorage.dayonetransparentPrimary);
        document.querySelector('html').style.setProperty('--transparentprimary-transparentcolor', localStorage.dayonetransparentprimaryTransparent);
        // document.querySelector('body').setAttribute('class', 'app sidebar-mini transparent-mode');
        document.querySelector('body').classList.remove("light-mode")
        document.querySelector('body').classList.remove("dark-mode")
        document.querySelector('body').classList.add("transparent-mode")

        $('#myonoffswitchTransparent').prop('checked', true);
    }

    if (localStorage.dayonetransparentBgImgPrimary) {
		// document.getElementById('transparentBgImgPrimaryColorID').value = localStorage.dayonetransparentBgImgPrimary;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.dayonetransparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.dayonetransparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.dayonetransparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--transparent-primary', localStorage.dayonetransparentBgImgPrimary);
		document.querySelector('html').style.setProperty('--transparentprimary-transparentcolor', localStorage.dayonetransparentBgImgprimaryTransparent);
		document.querySelector('body')?.classList.add('transparent-mode');
		document.querySelector('body')?.classList.remove('dark-mode');
		document.querySelector('body')?.classList.remove('light-mode');
		
		$('#myonoffswitchTransparent').prop('checked', true);
	}
    
    if (localStorage.dayonetransparentBgColor) {
        // document.getElementById('transparentBgColorID').value = localStorage.dayonetransparentBgColor;
        document.querySelector('html').style.setProperty('--transparent-body', localStorage.dayonetransparentBgColor);
        document.querySelector('html').style.setProperty('--transparent-mode', localStorage.dayonetransparentThemeColor);
        document.querySelector('html').style.setProperty('--transparentprimary-transparentcolor', localStorage.dayonetransparentprimaryTransparent);
        document.querySelector('body').classList.add('transparent-mode');
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.remove('light-mode');


        $('#myonoffswitchTransparent').prop('checked', true);
    }
	if (localStorage.dayoneBgImage) {
		document.querySelector('body')?.classList.add('transparent-mode');
        let bgImg = localStorage.dayoneBgImage.split(' ')[0];
		document.querySelector('body')?.classList.add(bgImg);
		document.querySelector('body')?.classList.remove('dark-mode');
		document.querySelector('body')?.classList.remove('light-mode');
		
		$('#myonoffswitchTransparent').prop('checked', true);
	}

    if(localStorage.dayonelightMode){
        document.querySelector('body')?.classList.add('light-mode');
		document.querySelector('body')?.classList.remove('dark-mode');
		document.querySelector('body')?.classList.remove('transparent-mode');
    }
    if(localStorage.dayonedarkMode){
        document.querySelector('body')?.classList.remove('light-mode');
		document.querySelector('body')?.classList.add('dark-mode');
		document.querySelector('body')?.classList.remove('transparent-mode');
        $('#myonoffswitch7').prop('checked', true);
    }
    if(localStorage.dayonetransparentMode){
        document.querySelector('body')?.classList.remove('light-mode');
		document.querySelector('body')?.classList.remove('dark-mode');
		document.querySelector('body')?.classList.add('transparent-mode');
        $('#myonoffswitchTransparent').prop('checked', true);
    }
    if(localStorage.dayonehorizontal){
        document.querySelector('body').classList.add('horizontal')
    }
    if(localStorage.dayonehorizontalHover){
        document.querySelector('body').classList.add('horizontal-hover')
    }
    if(localStorage.dayonertl){
        document.querySelector('body').classList.add('rtl')
    }
}

// triggers on changing the color picker
function changePrimaryColor() {
    $('#myonoffswitch3').prop('checked', true);
    $('#myonoffswitch6').prop('checked', true);
    // checkOptions();

    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('dayoneprimaryColor', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('dayoneprimaryHoverColor', userColor + 95);
    localStorage.setItem('dayoneprimaryBorderColor', userColor);
    localStorage.setItem('dayoneprimaryTransparent', userColor + 20);

    // removing dark theme properties
    localStorage.removeItem('dayonedarkPrimary')
    localStorage.removeItem('dayonetransparentBgColor');
    localStorage.removeItem('dayonetransparentThemeColor');
    localStorage.removeItem('dayonetransparentPrimary');
    localStorage.removeItem('dayonetransparentBgImgPrimary');
	localStorage.removeItem('dayonetransparentBgImgprimaryTransparent');
    localStorage.removeItem('dayonedarkprimaryTransparent');
    document.querySelector('body').classList.add('light-mode');
    document.querySelector('body').classList.remove('transparent-mode');
    document.querySelector('body').classList.remove('dark-mode');
	localStorage.removeItem('dayoneBgImage');

    $('#myonoffswitch1').prop('checked', true);
    names()

    
    localStorage.setItem('dayonelightMode', true);
    localStorage.removeItem('dayonedarkMode');
    localStorage.removeItem('dayonetransparentMode');
}

function darkPrimaryColor() {

    var userColor = document.getElementById('darkPrimaryColorID').value;
    localStorage.setItem('dayonedarkPrimary', userColor);
    localStorage.setItem('dayonedarkprimaryTransparent', userColor + 20);
    $('#myonoffswitch5').prop('checked', true);
    $('#myonoffswitch8').prop('checked', true);
    // checkOptions();

    // removing light theme data 
    localStorage.removeItem('dayoneprimaryColor')
    localStorage.removeItem('dayoneprimaryHoverColor')
    localStorage.removeItem('dayoneprimaryBorderColor')
    localStorage.removeItem('dayoneprimaryTransparent');
    localStorage.removeItem('dayonetransparentBgImgPrimary');
	localStorage.removeItem('dayonetransparentBgImgprimaryTransparent');

    localStorage.removeItem('dayonetransparentBgColor');
    localStorage.removeItem('dayonetransparentThemeColor');
    localStorage.removeItem('dayonetransparentPrimary');
	localStorage.removeItem('dayoneBgImage');

    document.querySelector('body').classList.add('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('transparent-mode');

    $('#myonoffswitch2').prop('checked', true);
    names()
    
    localStorage.setItem('dayonedarkMode', true);
    localStorage.removeItem('dayonelightMode');
    localStorage.removeItem('dayonetransparentMode');
}

function transparentPrimaryColor() {
    
    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);

    var userColor = document.getElementById('transparentPrimaryColorID').value;
    localStorage.setItem('dayonetransparentPrimary', userColor);
    localStorage.setItem('dayonetransparentprimaryTransparent', userColor + 20);

    // removing light theme data 
    localStorage.removeItem('dayonedarkPrimary');
    localStorage.removeItem('dayoneprimaryColor')
    localStorage.removeItem('dayoneprimaryHoverColor')
    localStorage.removeItem('dayoneBgImage')
    localStorage.removeItem('dayoneprimaryBorderColor')
    localStorage.removeItem('dayoneprimaryTransparent');
    localStorage.removeItem('dayonetransparentBgImgPrimary');
	localStorage.removeItem('dayonetransparentBgImgprimaryTransparent');
    document.querySelector('body').classList.add('transparent-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('dark-mode');
	document.querySelector('body')?.classList.remove('bg-img1');
	document.querySelector('body')?.classList.remove('bg-img2');
	document.querySelector('body')?.classList.remove('bg-img3');
	document.querySelector('body')?.classList.remove('bg-img4');

    $('#myonoffswitchTransparent').prop('checked', true);
    // checkOptions();
    names()
    
    localStorage.setItem('dayonetransparentMode', true);
    localStorage.removeItem('dayonelightMode');
    localStorage.removeItem('dayonedarkMode');
}

function transparentBgImgPrimaryColor() {
    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);
	var userColor = document.getElementById('transparentBgImgPrimaryColorID').value;
	localStorage.setItem('dayonetransparentBgImgPrimary', userColor);
	localStorage.setItem('dayonetransparentBgImgprimaryTransparent', userColor+20);
	if(
		document.querySelector('body')?.classList.contains('bg-img1') == false &&
		document.querySelector('body')?.classList.contains('bg-img2') == false &&
		document.querySelector('body')?.classList.contains('bg-img3') == false &&
		document.querySelector('body')?.classList.contains('bg-img4') == false
		){
		document.querySelector('body')?.classList.add('bg-img1');
        localStorage.setItem('dayoneBgImage', 'bg-img1')
	}
    // removing light theme data 
	localStorage.removeItem('dayonedarkPrimary');
	localStorage.removeItem('dayoneprimaryColor')
	localStorage.removeItem('dayoneprimaryHoverColor')
	localStorage.removeItem('dayoneprimaryBorderColor')
	localStorage.removeItem('dayoneprimaryTransparent');
	localStorage.removeItem('dayonedarkprimaryTransparent');
	localStorage.removeItem('dayonetransparentPrimary')
	localStorage.removeItem('transparentprimaryTransparent');
	document.querySelector('body').classList.add('transparent-mode');
	document.querySelector('body')?.classList.remove('light-mode');
	document.querySelector('body')?.classList.remove('dark-mode');

	$('#myonoffswitchTransparent').prop('checked', true);
    // checkOptions();
	names();
    
    localStorage.setItem('dayonetransparentMode', true);
    localStorage.removeItem('dayonelightMode');
    localStorage.removeItem('dayonedarkMode');
}


function transparentBgColor() {
    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);
    var userColor = document.getElementById('transparentBgColorID').value;
    localStorage.setItem('dayonetransparentBgColor', userColor);
    localStorage.setItem('dayonetransparentThemeColor', userColor + 95);
    localStorage.setItem('dayonetransparentprimaryTransparent', userColor + 20);
    localStorage.removeItem('dayonetransparentBgImgPrimary');
	localStorage.removeItem('dayonetransparentBgImgprimaryTransparent');

    // removing light theme data 
    localStorage.removeItem('dayoneBgImage')
    localStorage.removeItem('dayonedarkPrimary');
    localStorage.removeItem('dayoneprimaryColor')
    localStorage.removeItem('dayoneprimaryHoverColor')
    localStorage.removeItem('dayoneprimaryBorderColor')
    localStorage.removeItem('dayoneprimaryTransparent');
	localStorage.removeItem('dayoneBgImage');
    document.querySelector('body').classList.add('transparent-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('dark-mode');
	document.querySelector('body')?.classList.remove('bg-img1');
	document.querySelector('body')?.classList.remove('bg-img2');
	document.querySelector('body')?.classList.remove('bg-img3');
	document.querySelector('body')?.classList.remove('bg-img4');

    $('#myonoffswitchTransparent').prop('checked', true);
    // checkOptions();
    
    localStorage.setItem('dayonetransparentMode', true);
    localStorage.removeItem('dayonelightMode');
    localStorage.removeItem('dayonedarkMode');
}


function bgImage(e) {

    $('#myonoffswitch3').prop('checked', false);
    $('#myonoffswitch6').prop('checked', false);
    $('#myonoffswitch5').prop('checked', false);
    $('#myonoffswitch8').prop('checked', false);
	let imgID = e.getAttribute('class');
	localStorage.setItem('BgImage', imgID);
    
    // removing light theme data 
	localStorage.removeItem('dayonedarkPrimary');
	localStorage.removeItem('dayoneprimaryColor')
	localStorage.removeItem('dayonetransparentBgColor');
	localStorage.removeItem('dayonetransparentThemeColor');
	localStorage.removeItem('dayonetransparentprimaryTransparent');
	document.querySelector('body').classList.add('transparent-mode');
	document.querySelector('body')?.classList.remove('light-mode');
	document.querySelector('body')?.classList.remove('dark-mode');

	$('#myonoffswitchTransparent').prop('checked', true);
    // checkOptions();
}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
    // convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
    // get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
        if (typeof a !== "undefined") { return a / 255 }
        if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
            return 1
        }
        return alpha
    }
    // convertion of hex code to rgba code 
function hexToRgba(hexValue, alpha) {
    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}


let myVarVal, myVarVal1, myVarVal2, myVarVal3

function names() {

    // let docStyle = getComputedStyle(document.documentElement);
    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();


    //get variable
    myVarVal = localStorage.getItem("dayoneprimaryColor") || localStorage.getItem("dayonedarkPrimary") || localStorage.getItem("dayonetransparentPrimary") || localStorage.getItem("dayonetransparentBgImgPrimary")  || primaryColorVal;

    if(document.querySelector('#chartLine') !== null){
        index();
    }
    if(document.querySelector('#employees') !== null){
        index1();
    }
    
    if(document.querySelector('#employees') !== null){
        index2();
    }
    if(document.querySelector('#chartbar') !== null){
        chartbar();
    }
    if(document.querySelector('#balance') !== null){
        balance();
    }
    if(document.querySelector('#advancedtask') !== null){
        advancedtask();
    }
    if(document.querySelector('#spenttask') !== null){
        spenttask();
    }
    if(document.querySelector('#statistics') !== null){
        statistics();
    }
    if(document.querySelector('#statistics1') !== null){
        statistics1();
    }
    if(document.querySelector('#employee1') !== null){
        employee1();
    }
    if(document.querySelector('#chartbar-statistics') !== null){
        chartstatistics();
    }
    if(document.querySelector('#analysis') !== null){
        analysis();
    }
    if(document.querySelector('#overview') !== null){
        overview();
    }
    if(document.querySelector('#chartline1') !== null){
        chartline1();
    }
    if(document.querySelector('#chartLine3') !== null){
        chartLine3();
    }
    if(document.querySelector('#overview') !== null){
        overview();
    }
    if(document.querySelector('#ticketoverview') !== null){
        ticketoverview();
    }
    if(document.querySelector('#expenses') !== null){
        expenses();
    }
    
    
    let colorData = hexToRgba(myVarVal || primaryColorVal, 0.1)
    document.querySelector('html').style.setProperty('--primary01', colorData);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2)
    document.querySelector('html').style.setProperty('--primary02', colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3)
    document.querySelector('html').style.setProperty('--primary03', colorData2);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.6)
    document.querySelector('html').style.setProperty('--primary06', colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8)
    document.querySelector('html').style.setProperty('--primary08', colorData4);

    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.9)
    document.querySelector('html').style.setProperty('--primary09', colorData5);

} 
names()


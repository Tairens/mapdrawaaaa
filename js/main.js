$(document).ready(function() {


    var dir = "/images/big-carousel/";
    var first = true;
    var className = 'class="item active"';
    var fileextension = ".jpg";
    $.ajax({
        url: dir,
        success: function (data) {
            $(data).find("a:contains(" + fileextension + ")").each(function () {

                if (first == false){
                    className = 'class="item"';
                }
                var filename = this.href.replace(window.location.host, "").replace("http:///tabs/", "");

                $("#bigCarousel .carousel-inner").append($("<div "+ className + " style=\"background-image:url(" + dir + filename + ")\"></div>"));

                first = false;
            });
        }
    });


//jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-floating").offset().top > 380) {
            $(".navbar-floating").fadeIn();
        } else if ($(".navbar-floating").offset().top < 100) {
            $(".navbar-floating").fadeOut();
        }
    });

//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 800, 'easeInOutExpo');
            event.preventDefault();
        });
    });


    //Show caption when Click footer and hide by clicking caption

    $(".property-thumb > footer").click(function() {
        $(this).parent().find(".caption").fadeIn(250);
    });



    $(".caption").click(function() {
        $(this).fadeOut(205);
    });

    $('.caption').hover(
        function(){
            return false;
        },
        function(){
            $(this).parent().find('.caption').fadeOut(205)
        }
    );



    //        // Show caption when hover footer
    //        $('footer').hover(
    //                function(){
    //                    $(this).parent().find('.caption').fadeIn(250)
    //                }
    //        );
    //
    //        $('.caption').hover(
    //                function(){
    //                    return false;
    //                },
    //                function(){
    //                    $(this).parent().find('.caption').fadeOut(205)
    //                }
    //        );



    //      //Show caption when Click on image
    //
    //        $(".item").click(function() {
    //            $(this).parent().parent().parent().find(".caption").fadeIn(250);
    //        });
    //
    //        $(".caption").click(function() {
    //            $(this).fadeOut(205);
    //        });
    //
    //        $('.caption').hover(
    //                function(){
    //                    return false;
    //                },
    //                function(){
    //                    $(this).parent().find('.caption').fadeOut(205)
    //                }
    //        );





    $('.carousel').hover(
        function(){
            $(this).find('.carousel-control').fadeIn(250)
        },
        function(){
            $(this).find('.carousel-control').fadeOut(205)
        }
    );

    $('.slider').hover(
        function(){
            $(this).find('.slider-control').fadeIn(250)
        },
        function(){
            $(this).find('.slider-control').fadeOut(205)
        }
    );



    $('.dupa1').on('click', function(){
        $('.slider').flexslider('next')
        return false;
    })

});



// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
    var id_selector = $(this).attr("id");
    var id = id_selector.substr(id_selector.length -1);
    id = parseInt(id);
    $('.carousel').carousel(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
});

// when the carousel slides, auto update
$('.carousel').on('slid', function (e) {
    var id = $('.item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
});

$(function () {


    $('#blueimp-gallery').data('useBootstrapModal', false);
    $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', true);
    $('#blueimp-gallery').data('fullScreen', false);



    $('#image-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
    });

});

//OWL CAROUSEL

$(document).ready(function($) {

    $("#owl-properties").owlCarousel({
        margin:10,
        nav:false,

        items : 3, //10 items above 1000px browser width
        itemsDesktop : [1000,2], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,2], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});

//HULU THUBMNAILS

$(document).ready(function($) {

    $("#owl-thumbnails").owlCarousel({
        margin:22220,
        nav:false

    });

    // Custom Navigation Events
    $(".next").click(function(){
        owl.trigger('owl.next');
    })
    $(".prev").click(function(){
        owl.trigger('owl.prev');
    })
    $(".play").click(function(){
        owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
        owl.trigger('owl.stop');
    })

});



<!-- add extra js libs -->
<!-- add extra js function-->

$(".chzn-select").chosen();

$(".chzn-select-deselect").chosen({allow_single_deselect: true});

$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 2000
    })

    $('#myCarousel').on('slid.bs.carousel', function () {
        //alert("slid");
    });
});
$('.datepicker').each(function () {
    $(this).datepicker();
});

$(function () {
    $('.timepicker').timepicker();
});

$("input", "select").on('blur', function () {
    if ($(this).val()) {
        $(this).css("background-color", "#0f0");
    }
    else {
        $(this).css("background-color", "#fff");
    }
});

var json = {"Antrim": ["Andersonstown", "Ardoyne", "Ballycarry", "Ballycastle", "Ballyclare", "Ballygomartin", "Ballyhackamore", "Ballymena", "Ballymoney", "Ballymurphy", "Ballysillan", "Beechmount", "Belfast City Centre", "Belfast Commuter Towns", "Blackstaff", "Bushmills", "Carrickfergus", "Castlereagh", "Clogh Mills", "Crumlin", "Crumlin Road", "Donegall Road", "Dunadry", "Dunmurry", "East Belfast City", "Falls", "Glengormley", "Innisfaye", "Islandmagee", "Larne", "Lisburn", "Lisburn Road", "Maghaberry", "Malone", "Moira", "Musgrave", "Newtownabbey", "Newtownards", "North Belfast City", "Oldpark", "Ormeau", "Portrush", "Randalstown", "Shore Rd", "South Belfast City", "Springmartin", "Templepatrick", "Toome", "West Belfast City", "Whitehead", "Windsor"], "Armagh": ["Armagh", "Bessbrook", "Camlough", "Craigavon", "Creggan", "Crossmaglen", "Cullyhanna", "Hamiltonsbawn", "Helen's Bay", "Jonesborough", "Killeen", "Lurgan", "Markethill", "Newtownhamilton", "Portadown", "Poyntz pass", "Richhill", "Whitecross"], "Carlow": ["Ardattin", "Bagenalstown", "Ballinabranagh", "Ballinkillin", "Ballon", "Ballymurphy", "Bennekerry", "Borris", "Carlow Town", "Clonegal", "Clonmore", "Corries", "Fenagh", "Garryhill", "Graiguecullen", "Grange", "Hacketstown", "Kildavin", "Killerig", "Leighlinbridge", "Myshall", "Newtown", "Nurney", "Oldleighlin", "Palatine", "Pollerton", "Rathoe", "Rathvilly", "Ridge", "St. Mullins", "The Butts", "Tinryland", "Tullow"], "Cavan": ["Ardlougher", "Arva", "Bailieborough", "Ballinagh", "Ballyconnell", "Ballyhaise", "Ballyheelan", "Ballyjamesduff", "Bawnboy", "Belturbet", "Blacklion", "Butler's Bridge", "Canningstown", "Carrickaboy", "Castlerahan", "Cavan", "Cloverhill", "Cootehill", "Corlough", "Cornafean", "Crossdoney", "Crosserlough", "Cross Keys", "Doogary", "Dowra", "Finnea", "Glangevlin", "Kilcogy", "Killeshandra", "Killinkere", "Kilnaleck", "Kingscourt", "Lisnageer", "Lough Gowna", "Milltown", "Mountnugent", "Mullagh", "New Inn", "Oldcastle", "Redhills", "Ryefield", "Shercock", "Stradone", "Swanlinbar", "Tullyvin", "Virginia"], "Clare": ["Ardnacrusha", "Aughinish", "Ballinruan", "Ballynacally", "Ballyvaughan", "Barefield", "Bellharbour", "Bodyke", "Boston", "Bridgetown", "Broadford", "Bunratty", "Caher", "Carrigaholt", "Carron", "Clarecastle", "Clonlara", "Clooney", "Connolly", "Coolmeen", "Cooraclare", "Corofin", "Cranny", "Cratloe", "Cree", "Cross", "Crusheen", "Darragh", "Doolin", "Doonaha East", "Doonbeg", "Drumandoora", "Ennis", "Ennistymon", "Fanore", "Feakle", "Flagmount", "Formoyle", "Inagh", "Kilbaha", "Kildysart", "Kilfenora", "Kilkee", "Kilkishen", "Killadysert", "Killaloe", "Killanena", "Killimer", "Kilmaley", "Kilmihil", "Kilmore", "Kilmurry", "Kilmurry Mcmahon", "Kilnamona", "Kilrush", "Kilshanny", "Labasheeda", "Lahinch", "Liscannor", "Lisdoonvarna", "Lissycasey", "Mauricesmills", "Meelick", "Milltown Malbay", "Mountshannon", "Mullagh", "Newmarket on Fergus", "New Quay", "O'Briensbridge", "O'Callaghans Mills", "Ogonelloe", "Parteen", "Quilty", "Quin", "Ruan", "Scarriff", "Shannon", "Sixmilebridge", "Spanish Point", "Teermaclane", "The Burren", "Tuamgraney", "Tubber", "Tulla", "Whitegate"], "Cork": ["Adrigole", "Aghabullogue", "Aghada", "Ahakista", "Aherla", "Araglin", "Ardfield", "Ardgroom", "Ballinadee", "Ballinascarty", "Ballincollig", "Ballincrokig", "Ballineen", "Ballingeary", "Ballinhassig", "Ballinlough", "Ballinora", "Ballinspittle", "Ballintemple", "Ballinure", "Ballyclough", "Ballycotton", "Ballydehob", "Ballydesmond", "Ballyfeard", "Ballygarvan", "Ballyhooly", "Ballylickey", "Ballymacoda", "Ballymakeera", "Ballynacorra", "Ballynoe", "Ballyphehane", "Ballyvolane", "Ballyvourney", "Baltimore", "Bandon", "Banduff", "Banteer", "Bantry", "Beara", "Belgooly", "Bere Island", "Berrings", "Bishopstown", "Blackpool", "Blackrock", "Blarney", "Boherbue", "Burnfort", "Butlerstown", "Buttevant", "Bweeng", "Caheragh", "Cape Clear", "Carrig", "Carrigadrohid", "Carrigaline", "Carrignavar", "Carrigrohane", "Carrigtwohill", "Castlecor", "Castlefreke", "Castlelyons", "Castlemartyr", "Castletownbere", "Castletownroche", "Castletownshend", "Cecilstown", "Charleville", "Church Cross", "Churchfield", "Churchtown", "Clogheen", "Cloghroe", "Clonakilty", "Cloyne", "Coachford", "Cobh", "Conna", "Coomhola", "Cork City Centre", "Courtmacsherry", "Crookhaven", "Crookstown", "Crossbarry", "Crosshaven", "Cullen", "Curraglass", "Curraheen", "Dernagree", "Dillons Cross", "Doneraile", "Donnybrook", "Donoughmore", "Douglas", "Drimoleague", "Drinagh", "Dripsey", "Dromahane", "Dromina", "Dublin Pike", "Dungourney", "Dunmanus", "Dunmanway", "Dunworly", "Durrus", "East Ferry", "Enniskeane", "Eyeries", "Fairhill", "Farnanes", "Farran", "Farranree", "Fermoy", "Fountainstown", "Frankfield", "Freemount", "Garrettstown", "Garryvoe", "Glandore", "Glanmire", "Glantane", "Glanworth", "Glasheen", "Glenbrook", "Glengarriff", "Glenville", "Glounthaune", "Goleen", "Grange", "Grenagh", "Gurranabraher", "Hollyhill", "Inchigeelagh", "Inniscarra", "Innishannon", "Kanturk", "Kealkill", "Kerry Pike", "Kilbrin", "Kilbrittain", "Kilcrohane", "Kilcully", "Kildinan", "Kildorrery", "Killavullen", "Killeagh", "Killeens", "Kilmichael", "Kilmurry", "Kilnap", "Kilworth", "Kinsale", "Kishkeam", "Knocknagree", "Knocknaheeny", "Knockraha", "Ladysbridge", "Leamlara", "Leap", "Lehenaghmore", "Liscarrol", "Lissarda", "Little Island", "Lombardstown", "Lyre", "Macroom", "Mahon", "Mallow", "Mayfield", "Meelin", "Midleton", "Milford", "Millstreet", "Minane Bridge", "Mitchelstown", "Model Farm Road", "Mogeely", "Monkstown", "Montenotte", "Mourneabbey", "Myrtleville", "Nad", "Newcestown", "Newmarket", "Newtown", "Newtownshandrum", "Newtwopothouse", "Nohoval", "Ovens", "Ownahincha", "Oysterhaven", "Passage West", "Pouladuff", "Rathcool", "Rathcormac", "Rathpeacon", "Reananeree", "Ringaskiddy", "Riverstick", "Riverstown", "Rochestown", "Rockchapel", "Rosscarbery", "Rossmore", "Rostellan", "Rylane", "Saleen", "Schull", "Shanagarry", "Shanakiel", "Shanbally", "Shanballymore", "Sherkin Island", "Silversprings", "Skibbereen", "St. Lukes", "Sunday's Well", "The Lough", "Timoleague", "Tivoli", "Togher", "Togher (Cork City)", "Toormore", "Tower", "Tullylease", "Turners Cross", "Union Hall", "Vicarstown", "Victoria Cross", "Waterfall", "Watergrasshill", "Western Road", "Whitechurch", "Whitegate", "White's Cross", "Wilton", "Youghal"], "Derry": ["Ballykelly", "Castlerock", "Claudy", "Coleraine", "Derry City", "Drumahoe", "Dungiven", "Eglinton", "Limavady", "Londonderry", "Maghera", "Magherafelt"], "Donegal": ["Annagry", "Ardara", "Arranmore", "Ballindrait", "Ballintra", "Ballybofey", "Ballygorman", "Ballyhillin", "Ballyliffin", "Ballyshannon", "Barnesmore", "Bridgend", "Brinlack", "Bruckless", "Bunbeg", "Buncrana", "Bundoran", "Burnfoot", "Burt", "Burtonport", "Carn", "Carndonagh", "Carrick", "Carrigans", "Carrigart", "Carrowkeel", "Castlefin", "Churchill", "Cloghan", "Clonmany", "Convoy", "Cranford", "Creeslough", "Crolly", "Culdaff", "Derrybeg", "Donegal Town", "Doochary", "Downings", "Drumkeen", "Dunaff", "Dunfanaghy", "Dungloe", "Dunkineely", "Dunlewy", "Fahan", "Falcarragh", "Fanad", "Fintown", "Frosses", "Glen", "Glencolmcille", "Gleneely", "Glenties", "Glenvar", "Gortahork", "Greencastle", "Gweedore", "Inch", "Inver", "Kerrykeel", "Kilcar", "Killea", "Killybegs", "Killygordon", "Kilmacrenan", "Kincasslagh", "Lag", "Laghy", "Letterbarra", "Letterkenny", "Lettermacaward", "Lifford", "Liscooly", "Loughanure", "Maghery", "Malin", "Manorcunningham", "Meenaclady", "Meenlaragh", "Milford", "Mountcharles", "Moville", "Muff", "Newmills", "Newtown Cunningham", "Portnablagh", "Portnoo", "Portsalon", "Ramelton", "Raphoe", "Rathmullan", "Redcastle", "Rossgeir", "Rossnowlagh", "St. Johnstown", "Stranorlar", "Teelin", "Termon", "Treantagh"], "Down": ["Annallong", "Ballyhalbert", "Ballymacarrett", "Ballynahinch", "Banbridge", "Bangor", "Belmont", "Belvoir", "Boardmills", "Braniel", "Cairnshill", "Carrowdore", "Castlewellan", "Comber", "Conlig", "Connswater", "Crawfordsburn", "Crossgar", "Donaghadee", "Downpatrick", "Dromara", "Dromore", "Dundonald", "Galwally", "Groomsport", "Hillsborough", "Holywood", "Kilkeel", "Killyleagh", "Mayobridge", "Millisle", "Moira", "Newcastle", "Newry", "Newtownards", "Ormeau", "Portavogie", "Rathfriland", "Ravenhill", "Rostrevor", "Seaforde", "Sydenham", "Warrenpoint"], "Dublin": ["Ard Na Greine", "Artane", "Ashtown", "Aylesbury", "Ayrfield", "Balbriggan", "Baldonnell", "Baldoyle", "Balgriffin", "Ballinteer", "Ballsbridge", "Ballybough", "Ballyboughal", "Ballybrack", "Ballycullen", "Ballyfermot", "Ballymount", "Ballymun", "Balrothery", "Beaumont", "Blackrock", "Blanchardstown", "Bluebell", "Bohernabreena", "Booterstown", "Brittas", "Cabinteely", "Cabra", "Carpenterstown", "Carrickmines", "Castleknock", "Chapelizod", "Cherry Orchard", "Christchurch", "Churchtown", "Citywest", "Clarehall", "Cloghran", "Clondalkin", "Clonee", "Clongriffin", "Clonshaugh", "Clonsilla", "Clonskeagh", "Clontarf", "Coolock", "Crumlin", "Dalkey", "Dartry", "Deans Grange", "Dolphin's Barn", "Donabate", "Donaghmede", "Donnybrook", "Donnycarney", "Drimnagh", "Drumcondra", "Dublin", "Dundrum", "Dun Laoghaire", "East Wall", "Fairview", "Finglas", "Firhouse", "Foxrock", "Garristown", "Glasnevin", "Glasthule", "Glenageary", "Glencullen", "Grand Canal Dock", "Greenhills", "Harold's Cross", "Hollystown", "Howth", "Huntstown", "IFSC", "Inchicore", "Irishtown", "Islandbridge", "Jobstown", "Kilbarrack", "Killester", "Killiney", "Kilmacud", "Kilmainham", "Kilnamanagh", "Kilsallaghan", "Kilshane Cross", "Kilternan", "Kiltipper", "Kimmage", "Kingswood", "Kinsealy", "Knocklyon", "Leopardstown", "Loughlinstown", "Loughshinny", "Lucan", "Lusk", "Malahide", "Marino", "Merrion", "Milltown", "Monkstown", "Mount Merrion", "Mulhuddart", "Naul", "Navan Road", "Newcastle", "North Circular Road", "North Strand", "North Wall", "Oldbawn", "Oldtown", "Ongar", "Palmerstown", "Park West", "Perrystown", "Phibsborough", "Poppintree", "Porterstown", "Portmarnock", "Portobello", "Raheny", "Ranelagh", "Rathcoole", "Rathfarnham", "Rathgar", "Rathmichael", "Rathmines", "Rialto", "Ringsend", "Royal Canal Park", "Rush", "Saggart", "Saint Margaret's", "Sallynoggin", "Sandycove", "Sandyford", "Sandymount", "Santry", "Shankill", "Skerries", "Smithfield", "South Circular Road", "Stepaside", "Stillorgan", "Stoneybatter", "Strawberry Beds", "Sutton", "Swords", "Tallaght", "Temple Bar", "Templeogue", "Terenure", "The Coombe", "Tyrrelstown", "Walkinstown", "Ward", "Whitehall"], "Fermanagh": ["Belcoo", "Belleek", "Boho", "Derrygonnelly", "Ederney", "Enniskillen", "Garrison", "Irvinestown", "Kesh", "Newtownbutler", "Rosslea", "Teemore"], "Galway": ["Abbey", "Abbeyknockmoy", "Ahascragh", "Aille", "Annaghdown", "Ard", "Ardrahan", "Athenry", "Attymon", "Aughrim", "Ballinafad", "Ballinamore Bridge", "Ballinasloe", "Ballinderreen", "Ballybane", "Ballybrit", "Ballyconneely", "Ballygar", "Ballymacward", "Ballymoe", "Ballynahown", "Barna", "Barnaderg", "Bealdangan", "Belclare", "Bohermore", "Bullaun", "Bushy Park", "Caherlistrane", "Caltra", "Camus", "Cappagh", "Cappataggle", "Carna", "Carnmore", "Carraroe", "Carrowmore", "Cashel", "Casla", "Castleblakeney", "Castlegar", "Claddagh", "Claddaghduff", "Claregalway", "Clarinbridge", "Cleggan", "Clifden", "Clonbern", "Clonbur", "Clonfert", "Cloonboo", "Colmanstown", "Connemara", "Corcullen", "Cornamona", "Corofin", "Corrandulla", "Costello", "Craughwell", "Creggs", "Cregmore", "Crumlin", "Dangan", "Doughiska", "Dunmore", "Errislannan", "Eyrecourt", "Fahy", "Furbo", "Galway City Centre", "Glenamaddy", "Glentrasna", "Glinsk", "Gort", "Grannagh", "Greenfield", "Gurteen", "Headford", "Headford Road", "Inishbofin Island", "Inishmore", "Inverin", "Kilbeacanty", "Kilchreest", "Kilcolgan", "Kilconly", "Kilconnel", "Kilkerrin", "Kilkieran", "Killeen", "Killimor", "Killoran", "Kilreekil", "Kilronan", "Kiltullagh", "Kingston", "Kinvara", "Knocknacarra", "Kylebrack", "Kylemore", "Laban", "Lackagh", "Lavally", "Leenane", "Letteragh", "Letterfrack", "Lettermore", "Letttermullan", "Loughrea", "Maam Cross", "Maum", "Menlo", "Menlough", "Merlin", "Merlin Park", "Milltown", "Monivea", "Mountbellew", "Moyard", "Moycullen", "Moylough", "Mullagh", "Murroogh", "Newbridge", "Newcastle", "New Inn", "Oranmore", "Oughterard", "Ower", "Parkmore", "Peterswell", "Portumna", "Rahoon", "Recess", "Renmore", "Renvyle", "Roscam", "Rosmuc", "Rossaveel", "Rosscahill", "Roundstone", "Ryehill", "Salthill", "Shantalla", "Shrule", "Skehanagh", "Spiddal", "Streamstown", "Taylor's Hill", "Tirellan", "Tuam", "Tuam Road", "Tubber", "Tullokyne", "Tully Cross", "Turloughmore", "Tynagh", "Wellpark", "Williamstown", "Woodford", "Woodquay"], "Kerry": ["Abbeydorney", "Abbeyfeale", "Aghadoe", "Anascaul", "Ardfert", "Astee", "Ballinskelligs", "Ballybrack", "Ballybunion", "Ballydavid", "Ballyduff", "Ballyferriter", "Ballyheigue", "Ballylongford", "Banna", "Beaufort", "Brandon", "Brosna", "Caherciveen", "Caherdaniel", "Camp", "Caragh Lake", "Castlecove", "Castlegregory", "Castleisland", "Castlemaine", "Causeway", "Cloghane", "Clogher", "Cordal", "Cromane", "Currans", "Currow", "Dingle", "Dooks", "Duagh", "Dunquin", "Fahamore", "Farranfore", "Fenit", "Finuge", "Firies", "Fossa", "Glenbeigh", "Glencar", "Glenflesk", "Gneevguilla", "Inch", "Kells", "Kenmare", "Kilcummin", "Kilflynn", "Kilgarvan", "Killarney", "Killorglin", "Kilmorna", "Knocknagoshel", "Lauragh", "Lispole", "Lisselton", "Listowel", "Lixnaw", "Lycracrumpane", "Mastergreehy", "Milltown", "Moyvane", "Portmagee", "Rathmore", "Scartaglin", "Sneem", "Spa", "Tahilla", "Tarbert", "Teeromoyle", "Templenoe", "Tralee", "Tuosist", "Valentia Island", "Ventry", "Waterville"], "Kildare": ["Allen", "Allenwood", "Athgarvan", "Athy", "Ballitore", "Ballymore Eustace", "Brannockstown", "Broadford", "Calverstown", "Carbury", "Carragh", "Castledermot", "Celbridge", "Clane", "Coill Dubh", "Derrinturn", "Donadea", "Johnstown", "Johnstownbridge", "Johnstown Bridge", "Kilberry", "Kilcock", "Kilcullen", "Kildangan", "Kildare", "Kilgowan", "Kilkea", "Kill", "Kilmeage", "Kilshanroe", "Kilteel", "Leixlip", "Maganey", "Maynooth", "Milltown", "Monasterevin", "Moone", "Naas", "Narraghmore", "Newbridge", "Nurney", "Prosperous", "Punchestown", "Rathangan", "Rathcoffey", "Robertstown", "Sallins", "Staplestown", "Straffan", "Suncroft", "The Curragh", "Timolin", "Two Mile House"], "Kilkenny": ["Balleen", "Ballinamara", "Ballycallan", "Ballyfoyle", "Ballyhale", "Ballyragget", "Bennettsbridge", "Callan", "Carrigeen", "Castlecomer", "Castlewarren", "Clara", "Clogh", "Clonmantagh", "Coon", "Crosspatrick", "Cuffesgrange", "Danesfort", "Dungarvan", "Dunkitt", "Dunmore", "Dunnamaggan", "Fiddown", "Freshford", "Glenmore", "Goresbridge", "Gowran", "Graiguenamanagh", "Grange", "Hugginstown", "Inistioge", "Jenkinstown", "Johnstown", "Kells", "Kilderry", "Kilkenny", "Killamery", "Kilmacow", "Kilmanagh", "Kilmoganny", "Knocktopher", "Listerlin", "Mooncoin", "Mullinavat", "Newmarket", "Owning", "Paulstown", "Piltown", "Rathmoyle", "Slieverue", "Stoneyford", "The Rower", "Thomastown", "Three Castles", "Tullagher", "Tullaroan", "Urlingford", "Windgap"], "Laois": ["Abbeyleix", "Aghaboe", "Arless", "Attanagh", "Ballacolla", "Ballickmoyler", "Ballinakill", "Ballintubbert", "Ballyadams", "Ballybrittas", "Ballybrophy", "Ballycolla", "Ballydavis", "Ballyfin", "Ballylynan", "Ballyroan", "Borris in Ossory", "Camross", "Castletown", "Clonaslee", "Clough", "Coolrain", "Crettyard", "Cullahill", "Donaghmore", "Durrow", "Emo", "Errill", "Killenard", "Kilminchy", "Mountmellick", "Mountrath", "Pike of Rush Hall", "Portarlington", "Portlaoise", "Rathdowney", "Rosenallis", "Rossmore", "Shanahoe", "Stradbally", "Swan", "Vicarstown", "Wolfhill"], "Leitrim": ["Aghacashel", "Annaduff", "Askill", "Aughacashel", "Aughavas", "Aughnasheelan", "Ballinagleragh", "Ballinamore", "Bornacoola", "Carrick-on-Shannon", "Carrigallen", "Cloone", "Corry", "Dowra", "Dromahair", "Dromod", "Drumcong", "Drumkeeran", "Drumshanbo", "Drumsna", "Fenagh", "Garvagh", "Glenade", "Glencar", "Glenfarne", "Gortletteragh", "Gorvagh", "Greagh", "Jamestown", "Keshcarrigan", "Kilnagross", "Kiltyclogher", "Kinlough", "Leckaun", "Leitrim", "Lurganboy", "Manorhamilton", "Mohill", "Newtowngore", "Rooskey", "Rossinver", "Tullaghan"], "Limerick": ["Abbeyfeale", "Adare", "Anglesboro", "Annacotty", "Ardagh", "Ardpatrick", "Ashford", "Askeaton", "Athea", "Athlacca", "Ballagh", "Ballinacurra", "Ballingarry", "Ballyclough", "Ballyhahill", "Ballylanders", "Ballynanty", "Ballyneety", "Ballyorgan", "Ballysheedy", "Ballysimon", "Ballysteen", "Barna", "Boher", "Broadford", "Bruff", "Bruree", "Bulgaden", "Caherconlish", "Caherdavin", "Cappagh", "Cappamore", "Carrigkerry", "Castleconnell", "Castlemahon", "Castletown", "Castletroy", "Clareview", "Clarina", "Cloncagh", "Clonmacken", "Coonagh", "Corbally", "Crecora", "Creeves", "Croagh", "Croom", "Crossagalla", "Curraghchase", "Doon", "Dooradoyle", "Drombana", "Dromcolliher", "Dromkeen", "Effin", "Elton", "Ennis Road", "Farranshone", "Fedamore", "Feenagh", "Feohanagh", "Foynes", "Galbally", "Garryowen", "Garryspillane", "Glin", "Gouldavoher", "Granagh", "Grange", "Herbertstown", "Hospital", "Janesboro", "Kilcolman", "Kilcornan", "Kildimo", "Kileely", "Kilfinane", "Kilfinny", "Killeedy", "Kilmallock", "Kilmeedy", "Kilteely", "Knockaderry", "Knockainey", "Knockainy", "Knocklong", "Limerick City", "Lisnagry", "Lisnalty", "Loughill", "Martinstown", "Meanus", "Monagea", "Monaleen", "Mountcollins", "Moylish", "Mungret", "Murroe", "Newcastle West", "Newport", "North Circular Road", "Old Kildimo", "Oola", "Pallasgreen", "Pallaskenry", "Patrickswell", "Pennywell", "Prospect", "Raheen", "Rathbane", "Rathkeale", "Redgate", "Rhebogue", "Rossbrien", "Roxborough", "Shanagolden", "Singland", "South Circular Road", "Southill", "Strand", "Templeglantine", "Thomondgate", "Toornafulla", "Tournafulla"], "Longford": ["Abbeylara", "Abbeyshrule", "Ardagh", "Aughnacliffe", "Ballinalee", "Ballinamuck", "Ballymahon", "Carrickboy", "Clondra", "Colehill", "Dring", "Drumlish", "Edgeworthstown", "Ennybegs", "Granard", "Keenagh", "Killashee", "Killoe", "Lanesborough", "Legan", "Lisryan", "Longford Town", "Mostrim", "Moydow", "Moyne", "Newtowncashel", "Newtownforbes", "Ratharney", "Tarmonbarry"], "Louth": ["Annagassan", "Ardee", "Ballymakenny", "Baltray", "Blackrock", "Carlingford", "Castlebellingham", "Chanonrock", "Clogherhead", "Collon", "Darver", "Drogheda", "Dromin", "Dromiskin", "Drumcar", "Dundalk", "Dunleer", "Giles Quay", "Grangebellew", "Greenore", "Jenkinstown", "Kilcurry", "Kilkerley", "Kilsaran", "Knockbridge", "Louth", "Mansfieldstown", "Monasterboice", "Omeath", "Ravensdale", "Reaghstown", "Stabannan", "Tallanstown", "Tenure", "Termonfeckin", "Togher", "Townley Hall", "Tullyallen", "Whites Town"], "Mayo": ["Achill", "Achill Sound", "Aghamore", "Attymass", "Balla", "Ballina", "Ballindine", "Ballinrobe", "Ballintubber", "Ballycastle", "Ballycroy", "Ballyglass", "Ballyhaunis", "Ballyhean", "Ballynastangford", "Ballyvary", "Bangor Erris", "Barnatra", "Bekan", "Belcarra", "Belderrig", "Bellacorick", "Belmullet", "Bofeenaun", "Bohola", "Bonniconlon", "Brackloon", "Brickeens", "Bunacurry", "Callow", "Carracastle", "Carrowmore", "Castlebar", "Castlehill", "Charlestown", "Claremorris", "Clogher", "Cloontia", "Cong", "Crockets Town", "Cross", "Crossmolina", "Cuilmore", "Doocastle", "Doogort", "Doohooma", "Foxford", "Geesala", "Glencorrib", "Hollymount", "Irishtown", "Islandeady", "Keenagh", "Kilconly", "Kilcummin", "Kilkelly", "Killala", "Killasser", "Kilmaine", "Kilmeena", "Kilmovee", "Kiltimagh", "Knock", "Knockmore", "Lahardaun", "Liscarney", "Louisburgh", "Manulla", "Mayo", "Milltown", "Mulranny", "Neale", "Newport", "Park", "Partry", "Pollatomish", "Pontoon", "Rake Street", "Rosturk", "Roundfort", "Scardaun", "Shrule", "Strade", "Swinford", "Tourmakeady", "Turlough", "Westport", "Westport Quay"], "Meath": [], "Monaghan": ["Aghabog", "Annayalla", "Ballinode", "Ballybay", "Broomfield", "Carrickmacross", "Carrickroe", "Castleblayney", "Castleshane", "Clones", "Clontibret", "Drum", "Emyvale", "Glaslough", "Inniskeen", "Laragh", "Mill Town", "Monaghan", "Mullan", "Newbliss", "Rockcorry", "Scotshouse", "Scotstown", "Shantonagh", "Smithborough", "Stone Bridge", "Threemilehouse", "Tydavnet"], "Offaly": ["Ballinagar", "Ballycumber", "Banagher", "Belmont", "Birr", "Blue Ball", "Bracknagh", "Cadamstown", "Clara", "Clareen", "Cloghan", "Clonbullogue", "Clonygowan", "Cloughjordan", "Coolderry", "Crinkill", "Croghan", "Cushina", "Daingean", "Dunkerrin", "Edenderry", "Ferbane", "Geashill", "Horseleap", "Kilclonfert", "Kilcormac", "Killeigh", "Kinnitty", "Moneygall", "Mountbolus", "Pollagh", "Portarlington", "Rahan", "Rapemills", "Rhode", "Shannonbridge", "Shannon Harbour", "Shinrone", "Tullamore", "Walsh Island"], "Roscommon": ["Arigna", "Athleague", "Athlone", "Ballagh", "Ballaghadereen", "Ballinagare", "Ballinaheglish", "Ballinameen", "Ballinlough", "Ballintubber", "Ballydangan", "Ballyfarnon", "Ballyforan", "Ballyleague", "Ballymacurley", "Ballymurray", "Boyle", "Brideswell", "Carrick-on-Shannon", "Carrowbehy", "Castlecoote", "Castleplunkett", "Castlerea", "Cloonfad", "Cloonfower", "Cloonyquin", "Cloverhill", "Coolshaghtena", "Coolteige", "Cootehall", "Cornafulla", "Creggs", "Croghan", "Curraghboy", "Curraghroe", "Donamon", "Drum", "Dysart", "Elphin", "Fairymount", "Four Mile House", "Four Roads", "Frenchpark", "Fuerty", "Gallowstown", "Garranlahan", "Hill Street", "Keadue", "Kilglass", "Kilmore", "Kilrooskey", "Kilteevan", "Kiltoom", "Knockcroghery", "Knockvicar", "Lanesborough", "Lecarrow", "Lisacul", "Loughglynn", "Mount Talbot", "Oldtown", "Portrunny", "Rahara", "Rooskey", "Roscommon Town", "Runnabackan", "Scramoge", "Strokestown", "Taghmaconnell", "Tarmonbarry", "Tibohine", "Tulsk"], "Sligo": ["Achonry", "Aclare", "Ballaghnatrillick", "Ballinacarrow", "Ballinafad", "Ballinfull", "Ballinode", "Ballintogher", "Ballisodare", "Ballyconnell", "Ballygawley", "Ballymote", "Bellaghy", "Beltra", "Boyle", "Bunnanadden", "Calry", "Carney", "Carrowkeel", "Carrowmore", "Carrowneden", "Cashelgarran", "Castlebaldwin", "Castleconor", "Castlegal", "Cliffony", "Cloonacool", "Cloonloogh", "Colgagh", "Collooney", "Coola", "Coolaney", "Corbally", "Culfadda", "Culleens", "Curry", "Dromard", "Dromore West", "Drum", "Drumcliff", "Drumfin", "Easkey", "Geevagh", "Glencar", "Grange", "Gurteen", "Highwood", "Inishcrone", "Kesh", "Kilglass", "Killavil", "Kilmactranny", "Lavagh", "Monasteraden", "Moneygold", "Mullaghmore", "Mullaghroe", "Ransboro", "Rathcormac", "Rathlee", "Riverstown", "Ropefield", "Rosses Point", "Skreen", "Sligo", "Sooey", "Strandhill", "Templeboy", "Tourlestrane", "Tubbercurry"], "Tipperary": ["Aherlow", "Annacarty", "Ardcrony", "Ardfinnan", "Ballina", "Ballinahinch", "Ballinderry", "Ballingarry", "Ballinure", "Ballycahill", "Ballyclerahan", "Ballycommon", "Ballymackey", "Ballynonty", "Ballypatrick", "Ballyporeen", "Bansha", "Birdhill", "Boherlahan", "Borrisokane", "Borrisoleigh", "Burncourt", "Cahir", "Cappawhite", "Carrick-on-Suir", "Carrigatogher", "Cashel", "Clerihan", "Clogheen", "Cloneen", "Clonmel", "Clonmore", "Clonoulty", "Cloughjordan", "Coalbrook", "Commons", "Coolbawn", "Cullen", "Curreeny", "Dolla", "Donaskeagh", "Donohill", "Drangan", "Dromineer", "Dundrum", "Emly", "Fethard", "Glen of Aherlow", "Golden", "Gortnahoo", "Grangemockler", "Hollyford", "Holycross", "Horse and Jockey", "Inch", "Kilcash", "Kilcommon", "Kilfeakle", "Killenaule", "Kiloscully", "Kilross", "Kilsheelan", "Knock", "Knocklofty", "Lagganstown", "Lattin", "Limerick Junction", "Littleton", "Lorrha", "Masterstown", "Monard", "Moyne", "Mullinahone", "Nenagh", "Newcastle", "New Inn", "Newport", "Newtown", "Ninemilehouse", "Oola", "Portroe", "Puckaun", "Rathcabbin", "Rearcross", "Roscrea", "Rosegreen", "Silvermines", "Templederry", "Templemore", "Templetuohy", "Terryglass", "Thurles", "Tipperary Town", "Toomevara", "Toor", "Twomileborris", "Upperchurch"], "Tyrone": ["Aughnacloy", "Ballygawley", "Ballymagorry", "Coalisland", "Cookstown", "Dungannon", "Fintona", "Fivemiletown", "Galbally", "Omagh", "Plumbridge", "Pomeroy", "Strabane"], "Waterford": ["Aglish", "Annestown", "Ardmore", "Ballinamult", "Ballyduff", "Ballygunner", "Ballymacarbry", "Ballymacaw", "Ballytruckle", "Bunmahon", "Butlerstown", "Cappagh", "Cappoquin", "Carrick-on-Suir", "Carrigeen", "Cheekpoint", "Clashmore", "Clonea", "Dungarvan", "Dunhill", "Dunmore East", "Faithlegg", "Fenor", "Ferrybank", "Grange", "Grantstown", "Kilbrien", "Kill", "Kilmacow", "Kilmacthomas", "Kilmeadan", "Kinsalebeg", "Knockanore", "Lemybrien", "Lismore", "Mahon Bridge", "Millstreet", "Modelligo", "Newtown", "Old Parish", "Passage East", "Portlaw", "Rathgormack", "Ring", "Ringville", "Stradbally", "Tallow", "Tramore", "Villierstown", "Waterford City", "Woodstown"], "Westmeath": ["Athlone", "Ballinagore", "Ballinahown", "Ballinalack", "Ballykeeran", "Ballymore", "Ballynacarrigy", "Ballynafid", "Bealin", "Bunbrosna", "Castlepollard", "Castletown", "Clonmellon", "Collinstown", "Coole", "Coralstown", "Crookedwood", "Delvin", "Drumcree", "Drumraney", "Dysart", "Finea", "Fore", "Glasson", "Kilbeggan", "Kilkenny West", "Killucan", "Kinnegad", "Knockdrin", "Lismacaffrey", "Loughanavalley", "Milltownpass", "Moate", "Monilea", "Mount Temple", "Moyvore", "Mullingar", "Multyfarnham", "Raharney", "Rathconrath", "Rathowen", "Rochfortbridge", "Streamstown", "Streete", "Tang", "The Pigeons", "Tyrellspass", "Whitehall"], "Wexford": ["Adamstown", "Ardamine", "Arthurstown", "Ballaghkeen", "Ballinaboola", "Ballindaggan", "Balloughter", "Ballycanew", "Ballycarney", "Ballycullane", "Ballyduff", "Ballyedmond", "Ballygarrett", "Ballyhack", "Ballyhogue", "Ballymitty", "Ballymoney", "Ballymurn", "Ballywilliam", "Bannow", "Barntown", "Blackwater", "Boolavogue", "Bree", "Bridgetown", "Broadway", "Bunclody", "Cahore", "Camolin", "Campile", "Carne", "Carrigbyrne", "Castlebridge", "Castletown", "Cleariestown", "Clonegal", "Clongeen", "Clonroche", "Coolgreany", "Coolree", "Courtown", "Craanford", "Crossabeg", "Cullenstown", "Curracloe", "Drinagh", "Duncannon", "Duncormick", "Enniscorthy", "Ferns", "Ferrycarrig", "Fethard", "Fethard-On-Sea", "Foulksmills", "Galbally", "Glynn", "Gorey", "Gusserane", "Hilltown", "Hollyfort", "Inch", "Killag", "Killanne", "Killenagh", "Killinick", "Killinierin", "Killurin", "Kilmore", "Kilmore Quay", "Kilmuckridge", "Kilmyshall", "Kilnamanagh", "Kilrane", "Kiltealy", "Marshalstown", "Mayglass", "Monageer", "Monamolin", "Monaseed", "Mulgannon", "Murrintown", "Newbawn", "New Ross", "Oilgate", "Oulart", "Palace", "Piercestown", "Poulshone", "Raheen", "Ramsgrange", "Rathnure", "Riverchapel", "Rosslare Harbour", "Rosslare Strand", "Screen", "Tacumshane", "Taghmon", "Tagoat", "Tara Hill", "Templetown", "The Ballagh", "The Harrow", "Tomhaggard", "Tullycanna", "Waddington", "Wellington Bridge", "Wexford Town"], "Wicklow": ["Annamoe", "Arklow", "Ashford", "Aughrim", "Avoca", "Ballinaclash", "Ballinalea", "Ballymorris", "Baltinglass", "Barnadarrig", "Blainroe", "Blessington", "Bray", "Brittas Bay", "Carnew", "Coolattin", "Coolboy", "Delgany", "Donard", "Dunlavin", "Enniskerry", "Glencree", "Glendalough", "Glenealy", "Glenmalure", "Grange Con", "Greenan", "Greystones", "Hollywood", "Johnstown", "Kilbride", "Kilcoole", "Killiskey", "Kilmacanogue", "Kilmacoo", "Kilpedder", "Kilquade", "Kiltegan", "Knockananna", "Laragh", "Manor Kilbride", "Newcastle", "Newtownmountkennedy", "Rathdangan", "Rathdrum", "Rathnew", "Redcross", "Roundwood", "Shillelagh", "Stratford-on-Slaney", "Tinahely", "Valleymount", "Wicklow Town", "Woodenbridge"]};
//         function State() {
//             select = document.getElementById('slct1');
//             select.options.length = 0;
//             for (state in json) {
//                 select.options[select.options.length] = new Option(state, state);
//             }
//         }
//
//         function LG(sel) {
//             var lg = sel.options[sel.selectedIndex].value
//             select = document.getElementById('slct2');
//             select.options.length = 0;
//             for (var i = 0; i < json[lg].length; i++) {
//                 select.options[select.options.length] = new Option(json[lg][i], json[lg][i]);
//             }
//         }
$(document).ready(function(){
    $('[name="state"]').on('change',function(){
        var stateSelected = $("option:selected", this).val();
        var lgChoosen = json[stateSelected];
        $(this).parents('#div_id_state').next().find('#slct2').empty();
        for(i = 0; i < lgChoosen.length; i++){
            $(this).parents('#div_id_state').next().find('#slct2').append('<option value="'+lgChoosen[i]+'">'+lgChoosen[i]+'</option>')
        }
    });
});

$('.datepicker-default').datepicker({format: 'dd-mm-yyyy'});

checked = false;

// In a perfect world, this would be its own library file that got included
// on the page and only the ``$(document).ready(...)`` below would be present.
// But this is an example.
var Autocomplete = function (options) {
    this.form_selector = options.form_selector
    this.url = options.url || '/autocomplete/search/'
    this.delay = parseInt(options.delay || 300)
    this.minimum_length = parseInt(options.minimum_length || 3)
    this.form_elem = null
    this.query_box = null
}

Autocomplete.prototype.setup = function () {
    var self = this

    this.form_elem = $(this.form_selector)
    this.query_box = this.form_elem.find('input[name=q]')

    // Watch the input box.
    this.query_box.on('keyup', function () {
        var query = self.query_box.val()

        if (query.length < self.minimum_length) {
            return false
        }

        self.fetch(query)
    })

    // On selecting a result, populate the search field.
    this.form_elem.on('click', '.ac-result', function (ev) {
        self.query_box.val($(this).text())
        $('.ac-results').remove()
        return false
    })
}

Autocomplete.prototype.fetch = function (query) {
    var self = this

    $.ajax({
        url: this.url
        , data: {
            'q': query
        }
        , success: function (data) {
            self.show_results(data)
        }
    })
}

Autocomplete.prototype.show_results = function (data) {
    // Remove any existing results.
    $('.ac-results').remove()

    var results = data.results || []
    var results_wrapper = $('<div class="ac-results"></div>')
    var base_elem = $('<div class="result-wrapper"><i class="icon-search icon-white"></i> <a href="#" class="ac-result"></a></div>')

    if (results.length > 0) {
        for (var res_offset in results) {
            var elem = base_elem.clone()
            // Don't use .html(...) here, as you open yourself to XSS.
            // Really, you should use some form of templating.
            elem.find('.ac-result').text(results[res_offset])
            results_wrapper.append(elem)
        }
    }
    else {
        var elem = base_elem.clone()
        elem.text("No results found.")
        results_wrapper.append(elem)
    }

    this.query_box.after(results_wrapper)
}

$(document).ready(function () {
    window.autocomplete = new Autocomplete({
        form_selector: '.autocomplete-me'
    })
    window.autocomplete.setup()
})

$('.popoverData').popover({html: true});

$(document).ready(function () {

    $('#myTab li').click(function(){
        var pos = $(this).position();
        var tab_wth = $(this).width();
        var tri_wth = $('#triangle-pov').outerWidth();
        var tri_pos = pos.left+(tab_wth/2)-(tri_wth/2);
        $('#triangle-pointer').animate({
            'marginLeft': tri_pos
        },150);
    });
});

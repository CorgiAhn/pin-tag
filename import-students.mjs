// LWHS Pin-Tag 2026 - Student Import Script
// 324 students from signup form, with photos

const API_URL = 'https://pin-tag.vercel.app';
const API_TOKEN = 'mygame2026secrettoken';
const ADMIN_TOKEN = 'eWxlbWhuZWhlMHZvYmt0YWhtYjIwendz.MTc3NzI0NjgyNjAyNQ==.c8g1zw12m6z9a8li10der5if';

const students = [
  {
    "email": "29adam.kim@lwhs.org",
    "firstName": "Adam",
    "lastName": "Kim",
    "gradYear": 2029,
    "avatar": "large_user_8453606_89.jpg"
  },
  {
    "email": "28justin.cooper@lwhs.org",
    "firstName": "Justin",
    "lastName": "Cooper",
    "gradYear": 2028,
    "avatar": "large_user_8114730_524.jpg"
  },
  {
    "email": "27mia.fung@lwhs.org",
    "firstName": "Mia",
    "lastName": "Fung",
    "gradYear": 2027,
    "avatar": "large_user_7739446_218.jpg"
  },
  {
    "email": "26lazlo.martinez@lwhs.org",
    "firstName": "Lazlo",
    "lastName": "Martinez",
    "gradYear": 2026,
    "avatar": "large_user_7346487_380.jpg"
  },
  {
    "email": "29ayush.patel@lwhs.org",
    "firstName": "Ayush",
    "lastName": "Patel",
    "gradYear": 2029,
    "avatar": "large_user_8453640_191.jpg"
  },
  {
    "email": "26redd.dyer@lwhs.org",
    "firstName": "Redd",
    "lastName": "Dyer",
    "gradYear": 2026,
    "avatar": "large_user_7346443_563.jpg"
  },
  {
    "email": "27mario.lopez@lwhs.org",
    "firstName": "Mario",
    "lastName": "Lopez",
    "gradYear": 2027,
    "avatar": "large_user_7739477_293.jpg"
  },
  {
    "email": "26chase.stone@lwhs.org",
    "firstName": "Chase",
    "lastName": "Stone",
    "gradYear": 2026,
    "avatar": "large_user_7346525_154.jpg"
  },
  {
    "email": "27amelia.davies@lwhs.org",
    "firstName": "Amelia",
    "lastName": "Davies",
    "gradYear": 2027,
    "avatar": "large_user_7739428_969.jpg"
  },
  {
    "email": "26matthew.yan@lwhs.org",
    "firstName": "Matthew",
    "lastName": "Yan",
    "gradYear": 2026,
    "avatar": "large_user_7346546_5.jpg"
  },
  {
    "email": "27ishaan.wagle@lwhs.org",
    "firstName": "Ishaan",
    "lastName": "Wagle",
    "gradYear": 2027,
    "avatar": "large_user7739522_6174773_52.jpg"
  },
  {
    "email": "26sadie.ehrlich@lwhs.org",
    "firstName": "Sadie",
    "lastName": "Ehrlich",
    "gradYear": 2026,
    "avatar": "large_user_7346444_184.jpg"
  },
  {
    "email": "27mateo.leibowitz@lwhs.org",
    "firstName": "Mateo",
    "lastName": "Leibowitz",
    "gradYear": 2027,
    "avatar": "large_user_7739471_693.jpg"
  },
  {
    "email": "26caleb.wong@lwhs.org",
    "firstName": "Caleb",
    "lastName": "Wong",
    "gradYear": 2026,
    "avatar": "large_user_7346543_845.jpg"
  },
  {
    "email": "26camille.williams@lwhs.org",
    "firstName": "Camille",
    "lastName": "Williams",
    "gradYear": 2026,
    "avatar": "large_user_7346540_684.jpg"
  },
  {
    "email": "26olin.meyer@lwhs.org",
    "firstName": "Olin",
    "lastName": "Meyer",
    "gradYear": 2026,
    "avatar": "large_user_7346490_27.jpg"
  },
  {
    "email": "27noah.ahn@lwhs.org",
    "firstName": "Noah",
    "lastName": "Ahn",
    "gradYear": 2027,
    "avatar": "large_user_7739385_786.jpg"
  },
  {
    "email": "26franklin.honigberg@lwhs.org",
    "firstName": "Franklin",
    "lastName": "Honigberg",
    "gradYear": 2026,
    "avatar": "large_user_7346462_658.jpg"
  },
  {
    "email": "27kazu.gokalee@lwhs.org",
    "firstName": "Kazu",
    "lastName": "Goka-lee",
    "gradYear": 2027,
    "avatar": "large_user_7739450_748.jpg"
  },
  {
    "email": "27sean.coleman@lwhs.org",
    "firstName": "Sean",
    "lastName": "Coleman",
    "gradYear": 2027,
    "avatar": "large_user_7739422_361.jpg"
  },
  {
    "email": "26noa.solomoncarmel@lwhs.org",
    "firstName": "Noa",
    "lastName": "Solomon-carmel",
    "gradYear": 2026,
    "avatar": "large_user_7346522_706.jpg"
  },
  {
    "email": "26tarek.wilks@lwhs.org",
    "firstName": "Tarek",
    "lastName": "Wilks",
    "gradYear": 2026,
    "avatar": "large_user_7346539_101.jpg"
  },
  {
    "email": "27samuel.brown@lwhs.org",
    "firstName": "Samuel",
    "lastName": "Brown",
    "gradYear": 2027,
    "avatar": "large_user_7739405_60.jpg"
  },
  {
    "email": "27angie.woo@lwhs.org",
    "firstName": "Angie",
    "lastName": "Woo",
    "gradYear": 2027,
    "avatar": "large_user_7739532_503.jpg"
  },
  {
    "email": "26lucy.sun@lwhs.org",
    "firstName": "Lucy",
    "lastName": "Sun",
    "gradYear": 2026,
    "avatar": "large_user_7346526_253.jpg"
  },
  {
    "email": "27mika.jagannathan@lwhs.org",
    "firstName": "Mika",
    "lastName": "Jagannathan",
    "gradYear": 2027,
    "avatar": "large_user_7739456_766.jpg"
  },
  {
    "email": "28tali.chu@lwhs.org",
    "firstName": "Tali",
    "lastName": "Chu",
    "gradYear": 2028,
    "avatar": "large_user_8114722_933.jpg"
  },
  {
    "email": "26kai.scott@lwhs.org",
    "firstName": "Kai",
    "lastName": "B Scott",
    "gradYear": 2026,
    "avatar": "large_user_7346515_660.jpg"
  },
  {
    "email": "26quentin.williams@lwhs.org",
    "firstName": "Quentin",
    "lastName": "Williams",
    "gradYear": 2026,
    "avatar": "large_user_7346541_617.jpg"
  },
  {
    "email": "27aiden.abueg@lwhs.org",
    "firstName": "Aiden",
    "lastName": "Abueg",
    "gradYear": 2027,
    "avatar": "large_user_7739383_632.jpg"
  },
  {
    "email": "28ruhan.gulati@lwhs.org",
    "firstName": "Ruhan",
    "lastName": "Gulati",
    "gradYear": 2028,
    "avatar": "large_user_8114746_219.jpg"
  },
  {
    "email": "26frances.carlson@lwhs.org",
    "firstName": "Frances",
    "lastName": "Carlson",
    "gradYear": 2026,
    "avatar": "large_user_7346424_225.jpg"
  },
  {
    "email": "28carolyn.pham@lwhs.org",
    "firstName": "Carolyn",
    "lastName": "Pham",
    "gradYear": 2028,
    "avatar": "large_user_8114795_539.jpg"
  },
  {
    "email": "26briggs.cline@lwhs.org",
    "firstName": "Briggs",
    "lastName": "Cline",
    "gradYear": 2026,
    "avatar": "large_user_7346434_288.jpg"
  },
  {
    "email": "27logan.eade@lwhs.org",
    "firstName": "Logan",
    "lastName": "Eade",
    "gradYear": 2027,
    "avatar": "large_user_7739432_1.jpg"
  },
  {
    "email": "26zahara.jules@lwhs.org",
    "firstName": "Zahara",
    "lastName": "Jules",
    "gradYear": 2026,
    "avatar": "large_user_7346467_214.jpg"
  },
  {
    "email": "27ethan.liu@lwhs.org",
    "firstName": "Ethan",
    "lastName": "Liu",
    "gradYear": 2027,
    "avatar": "large_user_7739474_314.jpg"
  },
  {
    "email": "27analise.chin@lwhs.org",
    "firstName": "Analise",
    "lastName": "Chin",
    "gradYear": 2027,
    "avatar": "large_user_7739416_140.jpg"
  },
  {
    "email": "26cillian.stanley@lwhs.org",
    "firstName": "Cillian",
    "lastName": "Stanley",
    "gradYear": 2026,
    "avatar": "large_user_7346524_994.jpg"
  },
  {
    "email": "27charlie.moore@lwhs.org",
    "firstName": "Charlie",
    "lastName": "Moore",
    "gradYear": 2027,
    "avatar": "large_user_7739487_636.jpg"
  },
  {
    "email": "27maxxy.frey@lwhs.org",
    "firstName": "Maxxy",
    "lastName": "Frey",
    "gradYear": 2027,
    "avatar": "large_user_7739444_235.jpg"
  },
  {
    "email": "26nalin.pradhan@lwhs.org",
    "firstName": "Nalin",
    "lastName": "Pradhan",
    "gradYear": 2026,
    "avatar": "large_user_7346504_941.jpg"
  },
  {
    "email": "27liam.cohen@lwhs.org",
    "firstName": "Liam",
    "lastName": "Cohen",
    "gradYear": 2027,
    "avatar": "large_user_7739421_723.jpg"
  },
  {
    "email": "28kiran.richards@lwhs.org",
    "firstName": "Kiran",
    "lastName": "Richards",
    "gradYear": 2028,
    "avatar": "large_user_8114800_874.jpg"
  },
  {
    "email": "27gilana.frank@lwhs.org",
    "firstName": "Gilana",
    "lastName": "Frank",
    "gradYear": 2027,
    "avatar": "large_user_7739443_251.jpg"
  },
  {
    "email": "26asa.wendler@lwhs.org",
    "firstName": "Asa",
    "lastName": "Wendler",
    "gradYear": 2026,
    "avatar": "large_user_7346537_975.jpg"
  },
  {
    "email": "28aaliyah.berry@lwhs.org",
    "firstName": "Aaliyah",
    "lastName": "Berry",
    "gradYear": 2028,
    "avatar": "large_user_8114707_801.jpg"
  },
  {
    "email": "27kingston.cairo@lwhs.org",
    "firstName": "Kingston",
    "lastName": "Cairo",
    "gradYear": 2027,
    "avatar": "large_user_7739409_362.jpg"
  },
  {
    "email": "26lily.wang@lwhs.org",
    "firstName": "Lily",
    "lastName": "Wang",
    "gradYear": 2026,
    "avatar": "large_user7378921_5814427_189.jpg"
  },
  {
    "email": "27sidney.kitchingham@lwhs.org",
    "firstName": "Sidney",
    "lastName": "Kitchingham",
    "gradYear": 2027,
    "avatar": "large_user7739464_6174715_661.jpg"
  },
  {
    "email": "27cameron.bautista@lwhs.org",
    "firstName": "Cameron",
    "lastName": "Bautista",
    "gradYear": 2027,
    "avatar": "large_user_7739400_141.jpg"
  },
  {
    "email": "26stella.luongo@lwhs.org",
    "firstName": "Stella",
    "lastName": "Luongo",
    "gradYear": 2026,
    "avatar": "large_user_7346483_397.jpg"
  },
  {
    "email": "26ces.morell@lwhs.org",
    "firstName": "Ces",
    "lastName": "Morell",
    "gradYear": 2026,
    "avatar": "large_user_7346494_669.jpg"
  },
  {
    "email": "26jake.ramraykarogers@lwhs.org",
    "firstName": "Jake",
    "lastName": "Ramrayka Rogers",
    "gradYear": 2026,
    "avatar": "large_user_7346505_708.jpg"
  },
  {
    "email": "26maahir.gupta@lwhs.org",
    "firstName": "Maahir",
    "lastName": "Gupta",
    "gradYear": 2026,
    "avatar": "large_user_7346455_122.jpg"
  },
  {
    "email": "26patrick.romero@lwhs.org",
    "firstName": "Patrick",
    "lastName": "Romero",
    "gradYear": 2026,
    "avatar": "large_user_7346511_716.jpg"
  },
  {
    "email": "27sadie.baker@lwhs.org",
    "firstName": "Sadie",
    "lastName": "Baker",
    "gradYear": 2027,
    "avatar": "large_user_7739387_786.jpg"
  },
  {
    "email": "26finn.mcdonald@lwhs.org",
    "firstName": "Finn",
    "lastName": "Mcdonald",
    "gradYear": 2026,
    "avatar": "large_user_7346489_421.jpg"
  },
  {
    "email": "26nyara.afshar@lwhs.org",
    "firstName": "Nyara",
    "lastName": "Afshar",
    "gradYear": 2026,
    "avatar": "large_user7346409_5781948_491.jpg"
  },
  {
    "email": "29ashton.fung@lwhs.org",
    "firstName": "Ashton",
    "lastName": "Fung",
    "gradYear": 2029,
    "avatar": "large_user_8453586_244.jpg"
  },
  {
    "email": "27jude.feldman@lwhs.org",
    "firstName": "Jude",
    "lastName": "Feldman",
    "gradYear": 2027,
    "avatar": "large_user_7739439_831.jpg"
  },
  {
    "email": "27dylan.lachance@lwhs.org",
    "firstName": "Dylan",
    "lastName": "Lachance",
    "gradYear": 2027,
    "avatar": "large_user_7739468_571.jpg"
  },
  {
    "email": "29eli.posamentier@lwhs.org",
    "firstName": "Eli",
    "lastName": "Posamentier",
    "gradYear": 2029,
    "avatar": "large_user_8453648_526.jpg"
  },
  {
    "email": "26brandon.diaz@lwhs.org",
    "firstName": "Brandon",
    "lastName": "Diaz",
    "gradYear": 2026,
    "avatar": "large_user_7346440_47.jpg"
  },
  {
    "email": "27mina.fitzpatrick@lwhs.org",
    "firstName": "Mina",
    "lastName": "Fitzpatrick",
    "gradYear": 2027,
    "avatar": "large_user_7739440_951.jpg"
  },
  {
    "email": "27sachin.datar@lwhs.org",
    "firstName": "Sachin",
    "lastName": "Datar",
    "gradYear": 2027,
    "avatar": "large_user_7739427_142.jpg"
  },
  {
    "email": "27nora.donahue@lwhs.org",
    "firstName": "Nora",
    "lastName": "Donahue",
    "gradYear": 2027,
    "avatar": "large_user_7739431_424.jpg"
  },
  {
    "email": "27mateo.monfiglio@lwhs.org",
    "firstName": "Mateo",
    "lastName": "Monfiglio",
    "gradYear": 2027,
    "avatar": "large_user_7739485_158.jpg"
  },
  {
    "email": "27lucy.jameson@lwhs.org",
    "firstName": "Lucy",
    "lastName": "Jameson",
    "gradYear": 2027,
    "avatar": "large_user_7739457_136.jpg"
  },
  {
    "email": "28wyeth.nice@lwhs.org",
    "firstName": "Wyeth",
    "lastName": "Nice",
    "gradYear": 2028,
    "avatar": "large_user_8114788_138.jpg"
  },
  {
    "email": "28alisa.ching@lwhs.org",
    "firstName": "Alisa",
    "lastName": "Ching",
    "gradYear": 2028,
    "avatar": "large_user_8114720_965.jpg"
  },
  {
    "email": "27henry.chang@lwhs.org",
    "firstName": "Henry",
    "lastName": "Chang",
    "gradYear": 2027,
    "avatar": "large_user_7739415_571.jpg"
  },
  {
    "email": "27oliver.gestwicki@lwhs.org",
    "firstName": "Oliver",
    "lastName": "Gestwicki",
    "gradYear": 2027,
    "avatar": "large_user_7739448_319.jpg"
  },
  {
    "email": "27spencer.turley@lwhs.org",
    "firstName": "Spencer",
    "lastName": "Turley",
    "gradYear": 2027,
    "avatar": "large_user_7739519_749.jpg"
  },
  {
    "email": "27sonia.glass@lwhs.org",
    "firstName": "Sonia",
    "lastName": "Glass",
    "gradYear": 2027,
    "avatar": "large_user_7739449_479.jpg"
  },
  {
    "email": "27hailey.sapalo@lwhs.org",
    "firstName": "Hailey",
    "lastName": "Sapalo",
    "gradYear": 2027,
    "avatar": "large_user_7739504_212.jpg"
  },
  {
    "email": "27haruna.koizumi@lwhs.org",
    "firstName": "Haruna",
    "lastName": "Koizumi",
    "gradYear": 2027,
    "avatar": "large_user_7739466_251.jpg"
  },
  {
    "email": "27camryn.marlow@lwhs.org",
    "firstName": "Camryn",
    "lastName": "Marlow",
    "gradYear": 2027,
    "avatar": "large_user_7739478_258.jpg"
  },
  {
    "email": "29zoe.pinzonhamilton@lwhs.org",
    "firstName": "Zoe",
    "lastName": "Pinzon-hamilton",
    "gradYear": 2029,
    "avatar": "large_user_8453646_561.jpg"
  },
  {
    "email": "26myles.marcus@lwhs.org",
    "firstName": "Myles",
    "lastName": "Marcus",
    "gradYear": 2026,
    "avatar": "large_user_7346486_307.jpg"
  },
  {
    "email": "26kate.mirpuri@lwhs.org",
    "firstName": "Kate",
    "lastName": "Mirpuri",
    "gradYear": 2026,
    "avatar": "large_user_7346492_126.jpg"
  },
  {
    "email": "27johnny.doherty@lwhs.org",
    "firstName": "Johnny",
    "lastName": "Doherty",
    "gradYear": 2027,
    "avatar": "large_user_7739429_325.jpg"
  },
  {
    "email": "26lucas.bratt@lwhs.org",
    "firstName": "Lucas",
    "lastName": "Bratt",
    "gradYear": 2026,
    "avatar": "large_user_7346416_106.jpg"
  },
  {
    "email": "27lila.edwards@lwhs.org",
    "firstName": "Lila",
    "lastName": "Edwards",
    "gradYear": 2027,
    "avatar": "large_user7739435_6174686_466.jpg"
  },
  {
    "email": "26zach.leeds@lwhs.org",
    "firstName": "Zach",
    "lastName": "Leeds",
    "gradYear": 2026,
    "avatar": "large_user7346479_5782018_185.jpg"
  },
  {
    "email": "27valentina.klawonn@lwhs.org",
    "firstName": "Valentina",
    "lastName": "Klawonn",
    "gradYear": 2027,
    "avatar": "large_user_7739465_254.jpg"
  },
  {
    "email": "27ike.braunig@lwhs.org",
    "firstName": "Ike",
    "lastName": "Braunig",
    "gradYear": 2027,
    "avatar": "large_user_7739404_795.jpg"
  },
  {
    "email": "29jacob.wong@lwhs.org",
    "firstName": "Jacob",
    "lastName": "Wong",
    "gradYear": 2029,
    "avatar": "large_user_8453689_649.jpg"
  },
  {
    "email": "27anthony.shin@lwhs.org",
    "firstName": "Anthony",
    "lastName": "Shin",
    "gradYear": 2027,
    "avatar": "large_user_7739509_899.jpg"
  },
  {
    "email": "27amelia.cavander@lwhs.org",
    "firstName": "Amelia",
    "lastName": "Cavander",
    "gradYear": 2027,
    "avatar": "large_user7739411_6174662_131.jpg"
  },
  {
    "email": "29cayden.namie@lwhs.org",
    "firstName": "Cayden",
    "lastName": "Namie",
    "gradYear": 2029,
    "avatar": "large_user_8453633_107.jpg"
  },
  {
    "email": "27meadow.snyder@lwhs.org",
    "firstName": "Meadow",
    "lastName": "Snyder",
    "gradYear": 2027,
    "avatar": "large_user7739511_6174762_407.jpg"
  },
  {
    "email": "26troy.hegwood@lwhs.org",
    "firstName": "Troy",
    "lastName": "Hegwood",
    "gradYear": 2026,
    "avatar": "large_user_7346458_783.jpg"
  },
  {
    "email": "27violet.wolfe@lwhs.org",
    "firstName": "Violet",
    "lastName": "Wolfe",
    "gradYear": 2027,
    "avatar": "large_user_7739531_538.jpg"
  },
  {
    "email": "27kaitlyn.sun@lwhs.org",
    "firstName": "Kaitlyn",
    "lastName": "Sun",
    "gradYear": 2027,
    "avatar": "large_user_7739514_962.jpg"
  },
  {
    "email": "26jr.jacobs@lwhs.org",
    "firstName": "Jr",
    "lastName": "Jacobs",
    "gradYear": 2026,
    "avatar": "large_user_7346466_750.jpg"
  },
  {
    "email": "27lev.corliss@lwhs.org",
    "firstName": "Lev",
    "lastName": "Corliss",
    "gradYear": 2027,
    "avatar": "large_user_7739424_58.jpg"
  },
  {
    "email": "27kaelyn.villavicencio@lwhs.org",
    "firstName": "Kaelyn",
    "lastName": "Villavicencio",
    "gradYear": 2027,
    "avatar": "large_user_7739521_568.jpg"
  },
  {
    "email": "26anna.hill@lwhs.org",
    "firstName": "Anna",
    "lastName": "Hill",
    "gradYear": 2026,
    "avatar": "large_user7346460_5781999_257.jpg"
  },
  {
    "email": "26sofia.susal@lwhs.org",
    "firstName": "Sofia",
    "lastName": "Susal",
    "gradYear": 2026,
    "avatar": "large_user_7346527_119.jpg"
  },
  {
    "email": "27zoe.polsky@lwhs.org",
    "firstName": "Zoe",
    "lastName": "Polsky",
    "gradYear": 2027,
    "avatar": "large_user_7739495_650.jpg"
  },
  {
    "email": "28jack.burry@lwhs.org",
    "firstName": "Jack",
    "lastName": "Burry",
    "gradYear": 2028,
    "avatar": "large_user_8114715_307.jpg"
  },
  {
    "email": "27nyla.burke@lwhs.org",
    "firstName": "Nyla",
    "lastName": "Burke",
    "gradYear": 2027,
    "avatar": "large_user_7739407_987.jpg"
  },
  {
    "email": "26isa.burke@lwhs.org",
    "firstName": "Isa",
    "lastName": "Burke",
    "gradYear": 2026,
    "avatar": "large_user_7346421_493.jpg"
  },
  {
    "email": "26charlie.fridman@lwhs.org",
    "firstName": "Charlie",
    "lastName": "Fridman",
    "gradYear": 2026,
    "avatar": "large_user_7346449_201.jpg"
  },
  {
    "email": "27nolan.ocampo@lwhs.org",
    "firstName": "Nolan",
    "lastName": "Ocampo",
    "gradYear": 2027,
    "avatar": "large_user_7739490_671.jpg"
  },
  {
    "email": "28owen.johnson@lwhs.org",
    "firstName": "Owen",
    "lastName": "Johnson",
    "gradYear": 2028,
    "avatar": "large_user_8114757_798.jpg"
  },
  {
    "email": "27emi.chan@lwhs.org",
    "firstName": "Emi",
    "lastName": "Chan",
    "gradYear": 2027,
    "avatar": "large_user_7739413_142.jpg"
  },
  {
    "email": "27marcus.mitchell@lwhs.org",
    "firstName": "Marcus",
    "lastName": "Mitchell",
    "gradYear": 2027,
    "avatar": "large_user_7739484_318.jpg"
  },
  {
    "email": "27caden.lee@lwhs.org",
    "firstName": "Caden",
    "lastName": "Lee",
    "gradYear": 2027,
    "avatar": "large_user_7739469_428.jpg"
  },
  {
    "email": "27lucas.wee@lwhs.org",
    "firstName": "Lucas",
    "lastName": "Wee",
    "gradYear": 2027,
    "avatar": "large_user7739526_6174777_181.jpg"
  },
  {
    "email": "28kenya.tabuchi@lwhs.org",
    "firstName": "Kenya",
    "lastName": "Tabuchi",
    "gradYear": 2028,
    "avatar": "large_user_8114819_586.jpg"
  },
  {
    "email": "28gwyneth.kennedy@lwhs.org",
    "firstName": "Gwyneth",
    "lastName": "Kennedy",
    "gradYear": 2028,
    "avatar": "large_user_8114765_840.jpg"
  },
  {
    "email": "27mira.korngold@lwhs.org",
    "firstName": "Mira",
    "lastName": "Korngold",
    "gradYear": 2027,
    "avatar": "large_user_7739467_411.jpg"
  },
  {
    "email": "27sophie.rophael@lwhs.org",
    "firstName": "Sophie",
    "lastName": "Rophael",
    "gradYear": 2027,
    "avatar": "large_user7739502_6174753_953.jpg"
  },
  {
    "email": "27wyatt.rendon@lwhs.org",
    "firstName": "Wyatt",
    "lastName": "Rendon",
    "gradYear": 2027,
    "avatar": "large_user_7739497_612.jpg"
  },
  {
    "email": "26ellis.brown@lwhs.org",
    "firstName": "Ellis",
    "lastName": "Brown",
    "gradYear": 2026,
    "avatar": "large_user7346419_5781958_222.jpg"
  },
  {
    "email": "27anika.talwar@lwhs.org",
    "firstName": "Anika",
    "lastName": "Talwar",
    "gradYear": 2027,
    "avatar": "large_user_7739515_272.jpg"
  },
  {
    "email": "27deven.kapoor@lwhs.org",
    "firstName": "Deven",
    "lastName": "Kapoor",
    "gradYear": 2027,
    "avatar": "large_user_7739460_525.jpg"
  },
  {
    "email": "28bryce.chung@lwhs.org",
    "firstName": "Bryce",
    "lastName": "Chung",
    "gradYear": 2028,
    "avatar": "large_user_8114725_605.jpg"
  },
  {
    "email": "27alessia.rosso@lwhs.org",
    "firstName": "Alessia",
    "lastName": "Rosso",
    "gradYear": 2027,
    "avatar": "large_user_7739503_319.jpg"
  },
  {
    "email": "26christopher.sorensen@lwhs.org",
    "firstName": "Christopher",
    "lastName": "Sorensen",
    "gradYear": 2026,
    "avatar": "large_user7346523_5782062_793.jpg"
  },
  {
    "email": "27elyse.squires@lwhs.org",
    "firstName": "Elyse",
    "lastName": "Squires",
    "gradYear": 2027,
    "avatar": "large_user_7739512_132.jpg"
  },
  {
    "email": "27kolby.rodgers@lwhs.org",
    "firstName": "Kolby",
    "lastName": "Rodgers",
    "gradYear": 2027,
    "avatar": "large_user7741665_6176916_740.jpg"
  },
  {
    "email": "26greta.samaha@lwhs.org",
    "firstName": "Greta",
    "lastName": "Samaha",
    "gradYear": 2026,
    "avatar": "large_user7346514_5782053_316.jpg"
  },
  {
    "email": "28saira.kapoor@lwhs.org",
    "firstName": "Saira",
    "lastName": "Kapoor",
    "gradYear": 2028,
    "avatar": "large_user_8114762_523.jpg"
  },
  {
    "email": "28aanya.chandarana@lwhs.org",
    "firstName": "Aanya",
    "lastName": "Chandarana",
    "gradYear": 2028,
    "avatar": "large_user_8114718_146.jpg"
  },
  {
    "email": "27oliver.savedebeaurecueil@lwhs.org",
    "firstName": "Oliver",
    "lastName": "Save De Beaurecueil",
    "gradYear": 2027,
    "avatar": "large_user_7739506_438.jpg"
  },
  {
    "email": "27kara.kennedy@lwhs.org",
    "firstName": "Kara",
    "lastName": "Kennedy",
    "gradYear": 2027,
    "avatar": "large_user_7739463_487.jpg"
  },
  {
    "email": "27gloria.cebrian@lwhs.org",
    "firstName": "Gloria",
    "lastName": "Cebrian",
    "gradYear": 2027,
    "avatar": "large_user_7739412_53.jpg"
  },
  {
    "email": "29ella.tearney@lwhs.org",
    "firstName": "Ella",
    "lastName": "Tearney",
    "gradYear": 2029,
    "avatar": "large_user_8114821_405.jpg"
  },
  {
    "email": "26sav.saintprix@lwhs.org",
    "firstName": "Savion",
    "lastName": "Saint-prix",
    "gradYear": 2026,
    "avatar": "large_user_7346513_535.jpg"
  },
  {
    "email": "27lucia.wallace@lwhs.org",
    "firstName": "Lucia",
    "lastName": "Wallace",
    "gradYear": 2027,
    "avatar": "large_user_7739524_101.jpg"
  },
  {
    "email": "27arman.agbabian@lwhs.org",
    "firstName": "Arman",
    "lastName": "Agbabian",
    "gradYear": 2027,
    "avatar": "large_user_7739384_238.jpg"
  },
  {
    "email": "27jessie.scherer@lwhs.org",
    "firstName": "Jessie",
    "lastName": "Scherer",
    "gradYear": 2027,
    "avatar": "large_user_7739507_815.jpg"
  },
  {
    "email": "26etta.chung@lwhs.org",
    "firstName": "Etta",
    "lastName": "Chung",
    "gradYear": 2026,
    "avatar": "large_user_7346430_361.jpg"
  },
  {
    "email": "27liam.reynolds@lwhs.org",
    "firstName": "Liam",
    "lastName": "Reynolds",
    "gradYear": 2027,
    "avatar": "large_user_7739499_804.jpg"
  },
  {
    "email": "27olivia.friedman@lwhs.org",
    "firstName": "Olivia",
    "lastName": "Friedman",
    "gradYear": 2027,
    "avatar": "large_user_7739445_699.jpg"
  },
  {
    "email": "28matea.gebala@lwhs.org",
    "firstName": "Matea",
    "lastName": "Gebala",
    "gradYear": 2028,
    "avatar": "large_user_8114743_581.jpg"
  },
  {
    "email": "27parker.tang@lwhs.org",
    "firstName": "Parker",
    "lastName": "Tang",
    "gradYear": 2027,
    "avatar": "large_user_7739516_822.jpg"
  },
  {
    "email": "26hillary.phang@lwhs.org",
    "firstName": "Hillary",
    "lastName": "Phang",
    "gradYear": 2026,
    "avatar": "large_user_7346502_391.jpg"
  },
  {
    "email": "28hannah.weinberg@lwhs.org",
    "firstName": "Hannah",
    "lastName": "Weinberg",
    "gradYear": 2028,
    "avatar": "large_user_8114828_329.jpg"
  },
  {
    "email": "27tillie.clayton@lwhs.org",
    "firstName": "Tillie",
    "lastName": "Clayton",
    "gradYear": 2027,
    "avatar": "large_user_7739418_334.jpg"
  },
  {
    "email": "28emmanuelle.seguritan@lwhs.org",
    "firstName": "Em",
    "lastName": "Seguritan",
    "gradYear": 2028,
    "avatar": "large_user_8114806_390.jpg"
  },
  {
    "email": "27nora.selcow@lwhs.org",
    "firstName": "Nora",
    "lastName": "Selcow",
    "gradYear": 2027,
    "avatar": "large_user_7739508_153.jpg"
  },
  {
    "email": "26samantha.sherman@lwhs.org",
    "firstName": "Samantha",
    "lastName": "Sherman",
    "gradYear": 2026,
    "avatar": "large_user_7346518_423.jpg"
  },
  {
    "email": "27caroline.waingortin@lwhs.org",
    "firstName": "Caroline",
    "lastName": "Waingortin",
    "gradYear": 2027,
    "avatar": "large_user_7739523_474.jpg"
  },
  {
    "email": "26tea.theodosopoulos@lwhs.org",
    "firstName": "Ta",
    "lastName": "Theodosopoulos",
    "gradYear": 2026,
    "avatar": "large_user_7346529_921.jpg"
  },
  {
    "email": "26katelyn.evans@lwhs.org",
    "firstName": "Katelyn",
    "lastName": "Evans",
    "gradYear": 2026,
    "avatar": "large_user_7346447_111.jpg"
  },
  {
    "email": "26avery.yang@lwhs.org",
    "firstName": "Avery",
    "lastName": "Yang",
    "gradYear": 2026,
    "avatar": "large_user_7346547_143.jpg"
  },
  {
    "email": "26anakarina.moya@lwhs.org",
    "firstName": "Anakarina",
    "lastName": "Moya",
    "gradYear": 2026,
    "avatar": "large_user_7346496_21.jpg"
  },
  {
    "email": "26nola.kracaskey@lwhs.org",
    "firstName": "Nola",
    "lastName": "Kra-caskey",
    "gradYear": 2026,
    "avatar": "large_user_7346475_793.jpg"
  },
  {
    "email": "27artemis.boda@lwhs.org",
    "firstName": "Artemis",
    "lastName": "Boda",
    "gradYear": 2027,
    "avatar": "large_user_7739403_870.jpg"
  },
  {
    "email": "28addison.shin@lwhs.org",
    "firstName": "Addison",
    "lastName": "Shin",
    "gradYear": 2028,
    "avatar": "large_user_8114810_955.jpg"
  },
  {
    "email": "26margo.weber@lwhs.org",
    "firstName": "Margo",
    "lastName": "Weber",
    "gradYear": 2026,
    "avatar": "large_user_7346536_174.jpg"
  },
  {
    "email": "26ilana.zimmerman@lwhs.org",
    "firstName": "Ilana",
    "lastName": "Zimmerman",
    "gradYear": 2026,
    "avatar": "large_user_7346550_624.jpg"
  },
  {
    "email": "26joe.lu@lwhs.org",
    "firstName": "Joe",
    "lastName": "Lu",
    "gradYear": 2026,
    "avatar": "large_user_7346482_570.jpg"
  },
  {
    "email": "26jaro.fletesberkowitz@lwhs.org",
    "firstName": "Jaro",
    "lastName": "Fletes-berkowitz",
    "gradYear": 2026,
    "avatar": "large_user_7346448_913.jpg"
  },
  {
    "email": "26sanya.sohal@lwhs.org",
    "firstName": "Sanya",
    "lastName": "Sohal",
    "gradYear": 2026,
    "avatar": "large_user_7346521_992.jpg"
  },
  {
    "email": "28frank.ouyang@lwhs.org",
    "firstName": "Frank",
    "lastName": "Ouyang",
    "gradYear": 2028,
    "avatar": "large_user_8114791_476.jpg"
  },
  {
    "email": "29emily.brown@lwhs.org",
    "firstName": "Emily",
    "lastName": "Brown",
    "gradYear": 2029,
    "avatar": "large_user_8453559_187.jpg"
  },
  {
    "email": "27trey.mccarthy@lwhs.org",
    "firstName": "Trey",
    "lastName": "Mccarthy",
    "gradYear": 2027,
    "avatar": "large_user_7739480_74.jpg"
  },
  {
    "email": "27kawika.tao@lwhs.org",
    "firstName": "Kawika",
    "lastName": "Tao",
    "gradYear": 2027,
    "avatar": "large_user_7739517_265.jpg"
  },
  {
    "email": "27lucas.yan@lwhs.org",
    "firstName": "Lucas",
    "lastName": "Yan",
    "gradYear": 2027,
    "avatar": "large_user_7739534_465.jpg"
  },
  {
    "email": "28isa.blanco@lwhs.org",
    "firstName": "Isa",
    "lastName": "Blanco",
    "gradYear": 2028,
    "avatar": "large_user_8114709_884.jpg"
  },
  {
    "email": "27thorne.wyman@lwhs.org",
    "firstName": "Thorne",
    "lastName": "Wyman",
    "gradYear": 2027,
    "avatar": "large_user_7739533_681.jpg"
  },
  {
    "email": "26marcos.kim@lwhs.org",
    "firstName": "Marcos",
    "lastName": "Kim",
    "gradYear": 2026,
    "avatar": "large_user_7346473_368.jpg"
  },
  {
    "email": "26siddharth.chibber@lwhs.org",
    "firstName": "Siddharth",
    "lastName": "Chibber",
    "gradYear": 2026,
    "avatar": "large_user_7346428_138.jpg"
  },
  {
    "email": "29asa.huang@lwhs.org",
    "firstName": "Asa",
    "lastName": "Huang",
    "gradYear": 2029,
    "avatar": "large_user_8453597_349.jpg"
  },
  {
    "email": "26simone.hare@lwhs.org",
    "firstName": "Simone",
    "lastName": "Hare",
    "gradYear": 2026,
    "avatar": "large_user7346457_5781996_512.jpg"
  },
  {
    "email": "27nola.evans@lwhs.org",
    "firstName": "Nola",
    "lastName": "Evans",
    "gradYear": 2027,
    "avatar": "large_user_7739438_193.jpg"
  },
  {
    "email": "26charlie.wantoroclark@lwhs.org",
    "firstName": "Charlie",
    "lastName": "Wantoro-clark",
    "gradYear": 2026,
    "avatar": "large_user_7346533_658.jpg"
  },
  {
    "email": "27eddie.binetti@lwhs.org",
    "firstName": "Eddie",
    "lastName": "Binetti",
    "gradYear": 2027,
    "avatar": "large_user_7739402_493.jpg"
  },
  {
    "email": "26ivana.moreno@lwhs.org",
    "firstName": "Ivana",
    "lastName": "Moreno",
    "gradYear": 2026,
    "avatar": "large_user_7346495_893.jpg"
  },
  {
    "email": "29arshan.afshar@lwhs.org",
    "firstName": "Arshan",
    "lastName": "Afshar",
    "gradYear": 2029,
    "avatar": "large_user_8453551_938.jpg"
  },
  {
    "email": "28narsim.setlur@lwhs.org",
    "firstName": "Narsim",
    "lastName": "Setlur",
    "gradYear": 2028,
    "avatar": "large_user_8114807_28.jpg"
  },
  {
    "email": "29addison.li@lwhs.org",
    "firstName": "Addison",
    "lastName": "Li",
    "gradYear": 2029,
    "avatar": "large_user_8453617_490.jpg"
  },
  {
    "email": "26jacqueline.simeral@lwhs.org",
    "firstName": "Jacqueline",
    "lastName": "Simeral",
    "gradYear": 2026,
    "avatar": "large_user7346519_5782058_193.jpg"
  },
  {
    "email": "26hayden.allen@lwhs.org",
    "firstName": "Hayden",
    "lastName": "Allen",
    "gradYear": 2026,
    "avatar": "large_user_7346410_164.jpg"
  },
  {
    "email": "26matthew.rivadeneyra@lwhs.org",
    "firstName": "Matthew",
    "lastName": "Rivadeneyra",
    "gradYear": 2026,
    "avatar": "large_user_7346509_283.jpg"
  },
  {
    "email": "26inez.hernandezcarp@lwhs.org",
    "firstName": "Inez",
    "lastName": "Hernandez-carp",
    "gradYear": 2026,
    "avatar": "large_user_7346459_241.jpg"
  },
  {
    "email": "29camilo.hernandezcarp@lwhs.org",
    "firstName": "Camilo",
    "lastName": "Hernandez-carp",
    "gradYear": 2029,
    "avatar": "large_user_8453591_32.jpg"
  },
  {
    "email": "26lila.range@lwhs.org",
    "firstName": "Lila",
    "lastName": "Range",
    "gradYear": 2026,
    "avatar": "large_user7346506_5782045_150.jpg"
  },
  {
    "email": "27armaan.mishra@lwhs.org",
    "firstName": "Armaan",
    "lastName": "Mishra",
    "gradYear": 2027,
    "avatar": "large_user_7739483_963.jpg"
  },
  {
    "email": "26tyler.yee@lwhs.org",
    "firstName": "Tyler",
    "lastName": "Yee",
    "gradYear": 2026,
    "avatar": "large_user_7346548_304.jpg"
  },
  {
    "email": "27lauren.thompson@lwhs.org",
    "firstName": "Lauren",
    "lastName": "Thompson",
    "gradYear": 2027,
    "avatar": "large_user_7739518_589.jpg"
  },
  {
    "email": "28adil.kanal@lwhs.org",
    "firstName": "Adil",
    "lastName": "Kanal",
    "gradYear": 2028,
    "avatar": "large_user_8114759_784.jpg"
  },
  {
    "email": "26isa.shaw@lwhs.org",
    "firstName": "Isa",
    "lastName": "Shaw",
    "gradYear": 2026,
    "avatar": "large_user_7346516_551.jpg"
  },
  {
    "email": "26kai.denmark@lwhs.org",
    "firstName": "Kai",
    "lastName": "Denmark",
    "gradYear": 2026,
    "avatar": "large_user_7346439_334.jpg"
  },
  {
    "email": "28gabriel.amar@lwhs.org",
    "firstName": "Gabriel",
    "lastName": "Gabe Amar",
    "gradYear": 2028,
    "avatar": "large_user_8114699_942.jpg"
  },
  {
    "email": "26sam.wiley@lwhs.org",
    "firstName": "Sam",
    "lastName": "Wiley",
    "gradYear": 2026,
    "avatar": "large_user_7346538_136.jpg"
  },
  {
    "email": "26daniel.wydler@lwhs.org",
    "firstName": "Daniel",
    "lastName": "Wydler",
    "gradYear": 2026,
    "avatar": "large_user_7346545_540.jpg"
  },
  {
    "email": "28d3.colbert@lwhs.org",
    "firstName": "Dewayne",
    "lastName": "Colbert",
    "gradYear": 2028,
    "avatar": "large_user_8114728_168.jpg"
  },
  {
    "email": "28ajay.kosaraju@lwhs.org",
    "firstName": "Ajay",
    "lastName": "Kosaraju",
    "gradYear": 2028,
    "avatar": "large_user8114769_6549650_900.jpg"
  },
  {
    "email": "28carolina.kreamer@lwhs.org",
    "firstName": "Carolina",
    "lastName": "Kreamer",
    "gradYear": 2028,
    "avatar": "large_user_8114770_987.jpg"
  },
  {
    "email": "28ayan.azad@lwhs.org",
    "firstName": "Ayan",
    "lastName": "Azad",
    "gradYear": 2028,
    "avatar": "large_user_8114704_212.jpg"
  },
  {
    "email": "28eleanor.buchholz@lwhs.org",
    "firstName": "Eleanor",
    "lastName": "Buchholz",
    "gradYear": 2028,
    "avatar": "large_user_8114714_453.jpg"
  },
  {
    "email": "28seren.jones@lwhs.org",
    "firstName": "Seren",
    "lastName": "Jones",
    "gradYear": 2028,
    "avatar": "large_user_8114758_240.jpg"
  },
  {
    "email": "28eden.hsin@lwhs.org",
    "firstName": "Eden",
    "lastName": "Hsin",
    "gradYear": 2028,
    "avatar": "large_user_8114750_69.jpg"
  },
  {
    "email": "28shivani.porten@lwhs.org",
    "firstName": "Shivani",
    "lastName": "Porten",
    "gradYear": 2028,
    "avatar": "large_user_8114797_860.jpg"
  },
  {
    "email": "27max.eisenberg@lwhs.org",
    "firstName": "Max",
    "lastName": "Eisenberg",
    "gradYear": 2027,
    "avatar": "large_user_7739436_616.jpg"
  },
  {
    "email": "26ativ.mathur@lwhs.org",
    "firstName": "Ativ",
    "lastName": "Mathur",
    "gradYear": 2026,
    "avatar": "large_user_7368564_476.jpg"
  },
  {
    "email": "28treesha.makan@lwhs.org",
    "firstName": "Treesha",
    "lastName": "Makan",
    "gradYear": 2028,
    "avatar": "large_user_8114779_914.jpg"
  },
  {
    "email": "26lila.kangelaris@lwhs.org",
    "firstName": "Lila",
    "lastName": "Kangelaris",
    "gradYear": 2026,
    "avatar": "large_user7346469_5782008_273.jpg"
  },
  {
    "email": "27avery.belenson@lwhs.org",
    "firstName": "Avery",
    "lastName": "Belenson",
    "gradYear": 2027,
    "avatar": "large_user_7739401_302.jpg"
  },
  {
    "email": "27leena.liang@lwhs.org",
    "firstName": "Leena",
    "lastName": "Liang",
    "gradYear": 2027,
    "avatar": "large_user_7739472_244.jpg"
  },
  {
    "email": "26hugo.loeb@lwhs.org",
    "firstName": "Hugo",
    "lastName": "Loeb",
    "gradYear": 2026,
    "avatar": "large_user_7346480_344.jpg"
  },
  {
    "email": "29dylan.hope@lwhs.org",
    "firstName": "Dylan",
    "lastName": "Hope",
    "gradYear": 2029,
    "avatar": "large_user_8453596_687.jpg"
  },
  {
    "email": "29duncan.ortiz@lwhs.org",
    "firstName": "Duncan",
    "lastName": "Ortiz",
    "gradYear": 2029,
    "avatar": "large_user_8453637_247.jpg"
  },
  {
    "email": "29zurie.bosch@lwhs.org",
    "firstName": "Zurie",
    "lastName": "Bosch",
    "gradYear": 2029,
    "avatar": "large_user_8453557_637.jpg"
  },
  {
    "email": "29amelie.nesmith@lwhs.org",
    "firstName": "Amelie",
    "lastName": "Nesmith",
    "gradYear": 2029,
    "avatar": "large_user_8453635_212.jpg"
  },
  {
    "email": "28kai.feiszli@lwhs.org",
    "firstName": "Kai",
    "lastName": "Feiszli",
    "gradYear": 2028,
    "avatar": "large_user_8114738_68.jpg"
  },
  {
    "email": "28ronan.mcdougall@lwhs.org",
    "firstName": "Ronan",
    "lastName": "Mcdougall",
    "gradYear": 2028,
    "avatar": "large_user_8114780_901.jpg"
  },
  {
    "email": "28maddie.ting@lwhs.org",
    "firstName": "Maddie",
    "lastName": "Ting",
    "gradYear": 2028,
    "avatar": "large_user_8114824_851.jpg"
  },
  {
    "email": "28makoa.apanachan@lwhs.org",
    "firstName": "Makoa",
    "lastName": "Apana-chan",
    "gradYear": 2028,
    "avatar": "large_user_8114701_312.jpg"
  },
  {
    "email": "28sofia.bourgontrujillo@lwhs.org",
    "firstName": "Sofia",
    "lastName": "Bourgon-trujillo",
    "gradYear": 2028,
    "avatar": "large_user_8114710_672.jpg"
  },
  {
    "email": "28julia.padova@lwhs.org",
    "firstName": "Julia",
    "lastName": "Padova",
    "gradYear": 2028,
    "avatar": "large_user_8114792_82.jpg"
  },
  {
    "email": "28tessa.mocci@lwhs.org",
    "firstName": "Tessa",
    "lastName": "Mocci",
    "gradYear": 2028,
    "avatar": "large_user_8114782_37.jpg"
  },
  {
    "email": "28paco.sito@lwhs.org",
    "firstName": "Paco",
    "lastName": "Sito",
    "gradYear": 2028,
    "avatar": "large_user_8114812_596.jpg"
  },
  {
    "email": "28juan.yedra@lwhs.org",
    "firstName": "Juan",
    "lastName": "Yedra",
    "gradYear": 2028,
    "avatar": "large_user_8114834_768.jpg"
  },
  {
    "email": "29dylan.manning@lwhs.org",
    "firstName": "Dylan",
    "lastName": "Manning",
    "gradYear": 2029,
    "avatar": "large_user_8453623_361.jpg"
  },
  {
    "email": "29magnolia.doherty@lwhs.org",
    "firstName": "Magnolia",
    "lastName": "Doherty",
    "gradYear": 2029,
    "avatar": "large_user_8453576_272.jpg"
  },
  {
    "email": "29remi.klasen@lwhs.org",
    "firstName": "Remi",
    "lastName": "Klasen",
    "gradYear": 2029,
    "avatar": "large_user_8453609_852.jpg"
  },
  {
    "email": "28will.day@lwhs.org",
    "firstName": "Will",
    "lastName": "Day",
    "gradYear": 2028,
    "avatar": "large_user_8114731_675.jpg"
  },
  {
    "email": "28mariano.pfeifer@lwhs.org",
    "firstName": "Mariano",
    "lastName": "Pfeifer",
    "gradYear": 2028,
    "avatar": "large_user8114794_6549675_432.jpg"
  },
  {
    "email": "29sari.wathington@lwhs.org",
    "firstName": "Sari",
    "lastName": "Wathington",
    "gradYear": 2029,
    "avatar": "large_user_8453683_921.jpg"
  },
  {
    "email": "28chiara.rosso@lwhs.org",
    "firstName": "Chiara",
    "lastName": "Rosso",
    "gradYear": 2028,
    "avatar": "large_user_8114804_31.jpg"
  },
  {
    "email": "29noah.barlev@lwhs.org",
    "firstName": "Noah",
    "lastName": "Barlev",
    "gradYear": 2029,
    "avatar": "large_user8453556_6887493_884.jpg"
  },
  {
    "email": "29thara.kempner@lwhs.org",
    "firstName": "Thara",
    "lastName": "Kempner",
    "gradYear": 2029,
    "avatar": "large_user_8453605_963.jpg"
  },
  {
    "email": "29iris.nadler@lwhs.org",
    "firstName": "Iris",
    "lastName": "Nadler",
    "gradYear": 2029,
    "avatar": "large_user_8453632_250.jpg"
  },
  {
    "email": "29mattan.pincas@lwhs.org",
    "firstName": "Mattan",
    "lastName": "Pincas",
    "gradYear": 2029,
    "avatar": "large_user_8453644_923.jpg"
  },
  {
    "email": "28parker.washington@lwhs.org",
    "firstName": "Parker",
    "lastName": "Washington",
    "gradYear": 2028,
    "avatar": "large_user_8114827_615.jpg"
  },
  {
    "email": "28braxton.barr@lwhs.org",
    "firstName": "Braxton",
    "lastName": "Barr",
    "gradYear": 2028,
    "avatar": "large_user_8114705_372.jpg"
  },
  {
    "email": "29adela.honigberg@lwhs.org",
    "firstName": "Adela",
    "lastName": "Honigberg",
    "gradYear": 2029,
    "avatar": "large_user_8453595_384.jpg"
  },
  {
    "email": "29elliott.matschoss@lwhs.org",
    "firstName": "Elliott",
    "lastName": "Matschoss",
    "gradYear": 2029,
    "avatar": "large_user_8453626_20.jpg"
  },
  {
    "email": "29leena.kambara@lwhs.org",
    "firstName": "Leena",
    "lastName": "Kambara",
    "gradYear": 2029,
    "avatar": "large_user_8453601_465.jpg"
  },
  {
    "email": "29rio.alcantar@lwhs.org",
    "firstName": "Rio",
    "lastName": "Alcantar",
    "gradYear": 2029,
    "avatar": "large_user_8453552_515.jpg"
  },
  {
    "email": "29leo.coffman@lwhs.org",
    "firstName": "Leo",
    "lastName": "Coffman",
    "gradYear": 2029,
    "avatar": "large_user_8453570_237.jpg"
  },
  {
    "email": "29coco.mallegni@lwhs.org",
    "firstName": "Coco",
    "lastName": "Mallegni",
    "gradYear": 2029,
    "avatar": "large_user_8453622_884.jpg"
  },
  {
    "email": "29archer.feldman@lwhs.org",
    "firstName": "Archer",
    "lastName": "Feldman",
    "gradYear": 2029,
    "avatar": "large_user_8453580_983.jpg"
  },
  {
    "email": "29camdynn.banks@lwhs.org",
    "firstName": "Camdynn",
    "lastName": "Banks",
    "gradYear": 2029,
    "avatar": "large_user_8453554_978.jpg"
  },
  {
    "email": "29joss.pearlman@lwhs.org",
    "firstName": "Joss",
    "lastName": "Pearlman",
    "gradYear": 2029,
    "avatar": "large_user_8453641_961.jpg"
  },
  {
    "email": "29sophie.stokoe@lwhs.org",
    "firstName": "Sophie",
    "lastName": "Stokoe",
    "gradYear": 2029,
    "avatar": "large_user_8453667_161.jpg"
  },
  {
    "email": "29natalia.maldonado@lwhs.org",
    "firstName": "Natalia",
    "lastName": "Maldonado",
    "gradYear": 2029,
    "avatar": "large_user8453620_6887557_686.jpg"
  },
  {
    "email": "28santi.stacklozano@lwhs.org",
    "firstName": "Santiago",
    "lastName": "Stack Lozano",
    "gradYear": 2028,
    "avatar": "large_user_8114817_429.jpg"
  },
  {
    "email": "28emory.templeasheim@lwhs.org",
    "firstName": "Emory",
    "lastName": "Temple-asheim",
    "gradYear": 2028,
    "avatar": "large_user_8114822_761.jpg"
  },
  {
    "email": "29akash.saheba@lwhs.org",
    "firstName": "Akash",
    "lastName": "Saheba",
    "gradYear": 2029,
    "avatar": "large_user_8453656_449.jpg"
  },
  {
    "email": "28nicola.gnuse@lwhs.org",
    "firstName": "Nicola",
    "lastName": "Gnuse",
    "gradYear": 2028,
    "avatar": "large_user_8114744_382.jpg"
  },
  {
    "email": "29logan.pan@lwhs.org",
    "firstName": "Logan",
    "lastName": "Pan",
    "gradYear": 2029,
    "avatar": "large_user_8453638_620.jpg"
  },
  {
    "email": "29isabella.nolasco@lwhs.org",
    "firstName": "Bella",
    "lastName": "Nolasco",
    "gradYear": 2029,
    "avatar": "large_user_8453636_522.jpg"
  },
  {
    "email": "29diego.polley@lwhs.org",
    "firstName": "Diego",
    "lastName": "Polley",
    "gradYear": 2029,
    "avatar": "large_user_8453647_864.jpg"
  },
  {
    "email": "29teagan.burns@lwhs.org",
    "firstName": "Teagan",
    "lastName": "Burns",
    "gradYear": 2029,
    "avatar": "large_user_8453561_511.jpg"
  },
  {
    "email": "29gilbert.heye@lwhs.org",
    "firstName": "Gilbert",
    "lastName": "Heye",
    "gradYear": 2029,
    "avatar": "large_user_8453593_582.jpg"
  },
  {
    "email": "28aidan.byrne@lwhs.org",
    "firstName": "Aidan",
    "lastName": "Byrne",
    "gradYear": 2028,
    "avatar": "large_user8114716_6549597_133.jpg"
  },
  {
    "email": "28nisha.ahmed@lwhs.org",
    "firstName": "Nisha",
    "lastName": "Ahmed",
    "gradYear": 2028,
    "avatar": "large_user_8114697_507.jpg"
  },
  {
    "email": "29jinwon.lee@lwhs.org",
    "firstName": "Jinwon",
    "lastName": "Lee",
    "gradYear": 2029,
    "avatar": "large_user_8453616_991.jpg"
  },
  {
    "email": "29theo.verhaverbeke@lwhs.org",
    "firstName": "Theo",
    "lastName": "Verhaverbeke",
    "gradYear": 2029,
    "avatar": "large_user_8453679_959.jpg"
  },
  {
    "email": "29aubrey.winoto@lwhs.org",
    "firstName": "Aubrey",
    "lastName": "Winot",
    "gradYear": 2029,
    "avatar": "large_user_8453688_433.jpg"
  },
  {
    "email": "29celine.cua@lwhs.org",
    "firstName": "Celine",
    "lastName": "Cua",
    "gradYear": 2029,
    "avatar": "large_user_8453572_592.jpg"
  },
  {
    "email": "28imane.moosa@lwhs.org",
    "firstName": "Imane",
    "lastName": "Moosa",
    "gradYear": 2028,
    "avatar": "large_user_8114783_197.jpg"
  },
  {
    "email": "28jeremy.fuchs@lwhs.org",
    "firstName": "Jeremy",
    "lastName": "Fuchs",
    "gradYear": 2028,
    "avatar": "large_user_8114741_672.jpg"
  },
  {
    "email": "28lara.slater@lwhs.org",
    "firstName": "Lara",
    "lastName": "Slater",
    "gradYear": 2028,
    "avatar": "large_user_8114813_398.jpg"
  },
  {
    "email": "29oscar.maylean@lwhs.org",
    "firstName": "Oscar",
    "lastName": "May-lean",
    "gradYear": 2029,
    "avatar": "large_user_8453627_323.jpg"
  },
  {
    "email": "28alyssa.ong@lwhs.org",
    "firstName": "Alyssa",
    "lastName": "Ong",
    "gradYear": 2028,
    "avatar": "large_user_8114790_13.jpg"
  },
  {
    "email": "28emma.rivera@lwhs.org",
    "firstName": "Emma",
    "lastName": "Rivera",
    "gradYear": 2028,
    "avatar": "large_user_8114802_446.jpg"
  },
  {
    "email": "29ethan.kong@lwhs.org",
    "firstName": "Ethan",
    "lastName": "Kong",
    "gradYear": 2029,
    "avatar": "large_user_8453611_814.jpg"
  },
  {
    "email": "28jayden.moy@lwhs.org",
    "firstName": "Jayden",
    "lastName": "Moy",
    "gradYear": 2028,
    "avatar": "large_user_8114784_484.jpg"
  },
  {
    "email": "29alex.fox@lwhs.org",
    "firstName": "Alex",
    "lastName": "Fox",
    "gradYear": 2029,
    "avatar": "large_user_8453583_836.jpg"
  },
  {
    "email": "28rubyana.folau@lwhs.org",
    "firstName": "Rubyana",
    "lastName": "Folau",
    "gradYear": 2028,
    "avatar": "large_user_8114740_939.jpg"
  },
  {
    "email": "29maisey.halbertalexander@lwhs.org",
    "firstName": "Maisey",
    "lastName": "Halbert-alexander",
    "gradYear": 2029,
    "avatar": "large_user_8453587_547.jpg"
  },
  {
    "email": "28aaron.hur@lwhs.org",
    "firstName": "Aaron",
    "lastName": "Hur",
    "gradYear": 2028,
    "avatar": "large_user_8114752_836.jpg"
  },
  {
    "email": "29seraphina.moore@lwhs.org",
    "firstName": "Seraphina",
    "lastName": "Moore",
    "gradYear": 2029,
    "avatar": "large_user_8453631_393.jpg"
  },
  {
    "email": "28abby.sherman@lwhs.org",
    "firstName": "Abby",
    "lastName": "Sherman",
    "gradYear": 2028,
    "avatar": "large_user_8114809_153.jpg"
  },
  {
    "email": "28kingston.vora@lwhs.org",
    "firstName": "Kingston",
    "lastName": "Vora",
    "gradYear": 2028,
    "avatar": "large_user_8114825_458.jpg"
  },
  {
    "email": "29natalya.maley@lwhs.org",
    "firstName": "Natalya",
    "lastName": "Maley",
    "gradYear": 2029,
    "avatar": "large_user_8453621_333.jpg"
  },
  {
    "email": "29chace.cameron@lwhs.org",
    "firstName": "Chace",
    "lastName": "Cameron",
    "gradYear": 2029,
    "avatar": "large_user_8453562_651.jpg"
  },
  {
    "email": "29eloise.krehlik@lwhs.org",
    "firstName": "Eloise",
    "lastName": "Krehlik",
    "gradYear": 2029,
    "avatar": "large_user_8453612_476.jpg"
  },
  {
    "email": "28ike.luongo@lwhs.org",
    "firstName": "Ike",
    "lastName": "Luongo",
    "gradYear": 2028,
    "avatar": "large_user_8114778_674.jpg"
  },
  {
    "email": "29charlie.doyle@lwhs.org",
    "firstName": "Charlie",
    "lastName": "Doyle",
    "gradYear": 2029,
    "avatar": "large_user8453578_6887515_532.jpg"
  },
  {
    "email": "28rennen.pincas@lwhs.org",
    "firstName": "Rennen",
    "lastName": "Pincas",
    "gradYear": 2028,
    "avatar": "large_user8453645_6887582_221.jpg"
  },
  {
    "email": "28mei.chung@lwhs.org",
    "firstName": "Mei",
    "lastName": "Chung",
    "gradYear": 2028,
    "avatar": "large_user_8114726_961.jpg"
  },
  {
    "email": "29harry.deacon@lwhs.org",
    "firstName": "Harry",
    "lastName": "Deacon",
    "gradYear": 2029,
    "avatar": "large_user_8453574_394.jpg"
  },
  {
    "email": "29avrielle.thahar@lwhs.org",
    "firstName": "Avrielle",
    "lastName": "Thahar",
    "gradYear": 2029,
    "avatar": "large_user_8453672_980.jpg"
  },
  {
    "email": "28matthew.spokes@lwhs.org",
    "firstName": "Matthew",
    "lastName": "Spokes",
    "gradYear": 2028,
    "avatar": "large_user_8114815_304.jpg"
  },
  {
    "email": "29bryce.torio@lwhs.org",
    "firstName": "Bryce",
    "lastName": "Torio",
    "gradYear": 2029,
    "avatar": "large_user_8453675_443.jpg"
  },
  {
    "email": "29kai.jagannathan@lwhs.org",
    "firstName": "Kai",
    "lastName": "Jagannathan",
    "gradYear": 2029,
    "avatar": "large_user_8453599_883.jpg"
  },
  {
    "email": "29miles.richardson@lwhs.org",
    "firstName": "Miles",
    "lastName": "Richardson",
    "gradYear": 2029,
    "avatar": "large_user_8453651_630.jpg"
  },
  {
    "email": "29enzo.steiger@lwhs.org",
    "firstName": "Enzo",
    "lastName": "Steiger",
    "gradYear": 2029,
    "avatar": "large_user_8453666_499.jpg"
  },
  {
    "email": "29everett.karp@lwhs.org",
    "firstName": "Everett",
    "lastName": "Karp",
    "gradYear": 2029,
    "avatar": "large_user_8453603_827.jpg"
  },
  {
    "email": "29funmilayo.terrykoon@lwhs.org",
    "firstName": "Funmilayo",
    "lastName": "Terry-koon",
    "gradYear": 2029,
    "avatar": "large_user_8453671_676.jpg"
  },
  {
    "email": "29oliver.day@lwhs.org",
    "firstName": "Oliver",
    "lastName": "Day",
    "gradYear": 2029,
    "avatar": "large_user_8453573_895.jpg"
  },
  {
    "email": "28ryth.nguyen@lwhs.org",
    "firstName": "Ryth",
    "lastName": "Nguyen",
    "gradYear": 2028,
    "avatar": "large_user_8114787_228.jpg"
  },
  {
    "email": "29jay.katzenmeyer@lwhs.org",
    "firstName": "Jay",
    "lastName": "Katzenmeyer",
    "gradYear": 2029,
    "avatar": "large_user_8453604_92.jpg"
  },
  {
    "email": "29ellis.richardsonfeldman@lwhs.org",
    "firstName": "Ellis",
    "lastName": "Richardson Feldman",
    "gradYear": 2029,
    "avatar": "large_user_8453652_846.jpg"
  },
  {
    "email": "29luc.sarbib@lwhs.org",
    "firstName": "Luc",
    "lastName": "Sarbib",
    "gradYear": 2029,
    "avatar": "large_user_8453658_773.jpg"
  },
  {
    "email": "29ella.hansen@lwhs.org",
    "firstName": "Ella",
    "lastName": "Hansen",
    "gradYear": 2029,
    "avatar": "large_user_8453588_851.jpg"
  },
  {
    "email": "29lila.hershenson@lwhs.org",
    "firstName": "Lila",
    "lastName": "Hershenson",
    "gradYear": 2029,
    "avatar": "large_user_8453592_279.jpg"
  },
  {
    "email": "29mira.mathus@lwhs.org",
    "firstName": "Mira",
    "lastName": "Mathus",
    "gradYear": 2029,
    "avatar": "large_user_8453625_521.jpg"
  },
  {
    "email": "29rya.kubein@lwhs.org",
    "firstName": "Rya",
    "lastName": "Kubein",
    "gradYear": 2029,
    "avatar": "large_user_8453613_608.jpg"
  },
  {
    "email": "29jasper.sun@lwhs.org",
    "firstName": "Jasper",
    "lastName": "Sun",
    "gradYear": 2029,
    "avatar": "large_user_8453669_157.jpg"
  },
  {
    "email": "28kalista.chubb@lwhs.org",
    "firstName": "Kalista",
    "lastName": "Chubb",
    "gradYear": 2028,
    "avatar": "large_user_8114724_495.jpg"
  },
  {
    "email": "29tommy.donahue@lwhs.org",
    "firstName": "Tommy",
    "lastName": "Donahue",
    "gradYear": 2029,
    "avatar": "large_user_8453577_575.jpg"
  },
  {
    "email": "29christopher.cano@lwhs.org",
    "firstName": "Christopher",
    "lastName": "Cano",
    "gradYear": 2029,
    "avatar": "large_user_8453563_149.jpg"
  },
  {
    "email": "29charlie.whitelaw@lwhs.org",
    "firstName": "Charlie",
    "lastName": "Whitelaw",
    "gradYear": 2029,
    "avatar": "large_user_8453685_416.jpg"
  },
  {
    "email": "29lena.koenig@lwhs.org",
    "firstName": "Lena",
    "lastName": "Koenig",
    "gradYear": 2029,
    "avatar": "large_user_8453610_371.jpg"
  },
  {
    "email": "29mattie.wang@lwhs.org",
    "firstName": "Mattie",
    "lastName": "Wang",
    "gradYear": 2029,
    "avatar": "large_user_8453681_597.jpg"
  },
  {
    "email": "28luke.fujimori@lwhs.org",
    "firstName": "Luke",
    "lastName": "Fujimori",
    "gradYear": 2028,
    "avatar": "large_user_8114742_368.jpg"
  },
  {
    "email": "29logan.sukumar@lwhs.org",
    "firstName": "Logan",
    "lastName": "Sukumar",
    "gradYear": 2029,
    "avatar": "large_user_8453668_854.jpg"
  },
  {
    "email": "29kya.wong@lwhs.org",
    "firstName": "Kya",
    "lastName": "Wong",
    "gradYear": 2029,
    "avatar": "large_user_8453690_343.jpg"
  },
  {
    "email": "29franny.freedman@lwhs.org",
    "firstName": "Franny",
    "lastName": "Freedman",
    "gradYear": 2029,
    "avatar": "large_user_8453584_889.jpg"
  },
  {
    "email": "28guile.wu@lwhs.org",
    "firstName": "Guile",
    "lastName": "Wu",
    "gradYear": 2028,
    "avatar": "large_user_8114833_967.jpg"
  },
  {
    "email": "29rumi.weiner@lwhs.org",
    "firstName": "Rumi",
    "lastName": "Weiner",
    "gradYear": 2029,
    "avatar": "large_user_8453684_81.jpg"
  },
  {
    "email": "29amanda.yap@lwhs.org",
    "firstName": "Amanda",
    "lastName": "Yap",
    "gradYear": 2029,
    "avatar": "large_user_8453692_447.jpg"
  },
  {
    "email": "27coleton.namie@lwhs.org",
    "firstName": "Coleton",
    "lastName": "Namie",
    "gradYear": 2027,
    "avatar": "large_user_7739489_102.jpg"
  },
  {
    "email": "29arjun.somani@lwhs.org",
    "firstName": "Arjun",
    "lastName": "Somani",
    "gradYear": 2029,
    "avatar": "large_user_8453664_948.jpg"
  },
  {
    "email": "29lucia.montoya@lwhs.org",
    "firstName": "Lucia",
    "lastName": "Montoya",
    "gradYear": 2029,
    "avatar": "large_user_8453630_699.jpg"
  },
  {
    "email": "29natalia.urrutia@lwhs.org",
    "firstName": "Natalia",
    "lastName": "Urrutia",
    "gradYear": 2029,
    "avatar": "large_user_8453678_384.jpg"
  },
  {
    "email": "26diego.villega@lwhs.org",
    "firstName": "Diego",
    "lastName": "Villega",
    "gradYear": 2026,
    "avatar": "large_user_7346531_891.jpg"
  },
  {
    "email": "28daniela.poger@lwhs.org",
    "firstName": "Daniela",
    "lastName": "Poger",
    "gradYear": 2028,
    "avatar": "large_user_8114796_417.jpg"
  },
  {
    "email": "26emilia.duncanmunoz@lwhs.org",
    "firstName": "Emilia",
    "lastName": "Duncan Mubix",
    "gradYear": 2026,
    "avatar": "large_user_7346441_759.jpg"
  },
  {
    "email": "26tzeviel.tenorio@lwhs.org",
    "firstName": "Tzeviel",
    "lastName": "Tenorio",
    "gradYear": 2026,
    "avatar": "large_user_7346528_682.jpg"
  },
  {
    "email": "26lorenzo.lopez@lwhs.org",
    "firstName": "Lorenzo",
    "lastName": "Lopez",
    "gradYear": 2026,
    "avatar": "large_user_7346481_145.jpg"
  },
  {
    "email": "26benjy.cho@lwhs.org",
    "firstName": "Benjy",
    "lastName": "Cho",
    "gradYear": 2026,
    "avatar": "large_user_7346429_754.jpg"
  },
  {
    "email": "27king.ediae@lwhs.org",
    "firstName": "King",
    "lastName": "Ediae",
    "gradYear": 2027,
    "avatar": "large_user_7739434_496.jpg"
  }
];

async function run() {
  // Step 1: Create game
  console.log('Creating game...');
  const gameRes = await fetch(`${API_URL}/api/admin/games/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Cookie': `token=${ADMIN_TOKEN}` },
    body: JSON.stringify({ name: 'LWHS Pin-Tag 2026' }),
  });
  const game = await gameRes.json();
  if (!game.id) { console.error('Failed to create game:', game); process.exit(1); }
  console.log('Game created:', game.id);

  // Step 2: Create all users
  console.log(`\nCreating ${students.length} users...`);
  const userIds = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    try {
      const res = await fetch(`${API_URL}/api/auth/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_TOKEN}` },
        body: JSON.stringify(student),
      });
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.userId) {
        userIds.push(data.userId);
        process.stdout.write('.');
      } else {
        console.log(`\n[${i}] Failed: ${student.email}`, data);
      }
    } catch (err) {
      console.log(`\n[${i}] Error on ${student.email}:`, err.message);
    }
  }
  console.log(`\n✅ Created ${userIds.length} users`);

  // Step 3: Set joinable in Supabase
  console.log('\n⚠️  Go to Supabase → Game table → set isJoinable = true for game', game.id);
  console.log('Press Enter when done...');
  await new Promise(resolve => process.stdin.once('data', resolve));

  // Step 4: Join all
  console.log('Joining users to game...');
  let joined = 0;
  for (const userId of userIds) {
    try {
      const res = await fetch(`${API_URL}/api/games/${game.id}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${API_TOKEN}` },
        body: JSON.stringify({ userId }),
      });
      const text = await res.text();
      const data = JSON.parse(text);
      if (data.id) { joined++; process.stdout.write('.'); }
      else { console.log(`\nFailed join ${userId}:`, data.error); }
    } catch (err) {
      console.log(`\nError joining ${userId}:`, err.message);
    }
  }
  console.log(`\n✅ ${joined}/${students.length} students joined!`);
  console.log(`\nAdmin portal: ${API_URL}/admin/game/${game.id}`);
  console.log('Now assign targets and start the game!');
}

run().catch(console.error);

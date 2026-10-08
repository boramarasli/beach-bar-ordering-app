// menu-data.js - the menu, the options and all translations (6 languages).
// Content only: prepared with AI help from the bar's printed menu. Not typed by hand.

const L=['en','el','de','tr','bg','ro'];
const LN={en:'English',el:'Ελληνικά',de:'Deutsch',tr:'Türkçe',bg:'Български',ro:'Română'};
const LEN={en:'English',el:'Greek',de:'German',tr:'Turkish',bg:'Bulgarian',ro:'Romanian'};
const T=(en,el,de,tr,bg,ro)=>({en,el,de,tr,bg,ro});

const UI={
en:{umb:'Umbrella',min:'Minimum today',minnote:'Everything you order counts toward it.',togo:'left to reach the minimum',met:'Minimum reached',cleanp:'Empty plates or glasses on your sunbed? Send someone over.',clean:'Clear my table',onway:'Someone is on the way.',nudge:'Remind them',nudged:'Reminder sent',tab:'Your tab — umbrella 605',tot:'Running total',pay:'Pay at the end of the day with your waiter. Nothing is charged here.',send:'Send order',sent:'Sent to the bar',it:'items',langt:'Language',
 gtitle:'Allergies and intolerances',gbody:'We need to know before we send anything to the kitchen.',gnone:'No allergies',gsome:'I have allergies or intolerances',gpick:'Select all that apply',gother:'Anything else we should know — write it here',gerr:'Pick at least one, or write it in the box.',ggo:'Continue to the menu',abnone:'No allergies recorded',absome:'Allergies noted:',edit:'Edit',
 add:'Add',cancel:'Cancel',req:'required',water:'Served with a 0.5L bottle of water.',
 reqs:'Special requests',reqph:'Anything else — we will pass it on',reqdisc:'Special requests may not be possible and may be charged extra.',
 surch:'Special request',surnote:'Added by the bar',
 serve:'Serve',sugar:'Sugar',milk:'Milk',ice:'Ice',extras:'Extras',done:'How would you like it cooked',side:'Add an extra side',strength:'Strength',size:'Size',choice:'Choose',weight:'Approximate weight',frozen:'Frozen',
 fAll:'All',fGlass:'By the glass',fShot:'Shots',fBottle:'Bottles',fNone:'Nothing in this section is served that way.'},
el:{umb:'Ομπρέλα',min:'Ελάχιστη κατανάλωση',minnote:'Ό,τι παραγγείλετε μετράει.',togo:'ακόμη για την ελάχιστη κατανάλωση',met:'Καλύφθηκε η ελάχιστη κατανάλωση',cleanp:'Άδεια πιάτα ή ποτήρια στην ξαπλώστρα; Στέλνουμε κάποιον.',clean:'Μάζεψτε το τραπέζι',onway:'Έρχεται κάποιος.',nudge:'Υπενθύμιση',nudged:'Στάλθηκε υπενθύμιση',tab:'Ο λογαριασμός σας — ομπρέλα 605',tot:'Σύνολο',pay:'Η πληρωμή γίνεται στο τέλος της ημέρας με τον σερβιτόρο σας. Εδώ δεν χρεώνεται τίποτα.',send:'Αποστολή παραγγελίας',sent:'Στάλθηκε στο μπαρ',it:'είδη',langt:'Γλώσσα',
 gtitle:'Αλλεργίες και δυσανεξίες',gbody:'Πρέπει να το γνωρίζουμε πριν στείλουμε οτιδήποτε στην κουζίνα.',gnone:'Καμία αλλεργία',gsome:'Έχω αλλεργίες ή δυσανεξίες',gpick:'Επιλέξτε ό,τι ισχύει',gother:'Κάτι άλλο που πρέπει να ξέρουμε — γράψτε το εδώ',gerr:'Επιλέξτε τουλάχιστον ένα ή γράψτε το στο πλαίσιο.',ggo:'Συνέχεια στο μενού',abnone:'Καμία αλλεργία',absome:'Αλλεργίες:',edit:'Αλλαγή',
 add:'Προσθήκη',cancel:'Άκυρο',req:'υποχρεωτικό',water:'Σερβίρεται με νερό 0,5L.',
 reqs:'Ειδικά αιτήματα',reqph:'Κάτι άλλο — θα το μεταφέρουμε',reqdisc:'Τα ειδικά αιτήματα μπορεί να μην είναι εφικτά και να χρεωθούν επιπλέον.',
 surch:'Ειδικό αίτημα',surnote:'Προστέθηκε από το μπαρ',
 serve:'Σερβίρισμα',sugar:'Ζάχαρη',milk:'Γάλα',ice:'Πάγος',extras:'Έξτρα',done:'Πόσο ψημένο',side:'Έξτρα συνοδευτικό',strength:'Ένταση',size:'Μέγεθος',choice:'Επιλέξτε',weight:'Κατά προσέγγιση βάρος',frozen:'Κατεψυγμένο',
 fAll:'Όλα',fGlass:'Με το ποτήρι',fShot:'Σφηνάκια',fBottle:'Φιάλες',fNone:'Τίποτα σε αυτή την ενότητα δεν σερβίρεται έτσι.'},
de:{umb:'Schirm',min:'Mindestverzehr heute',minnote:'Alles, was Sie bestellen, zählt dazu.',togo:'bis zum Mindestverzehr',met:'Mindestverzehr erreicht',cleanp:'Leere Teller oder Gläser auf der Liege? Wir kommen vorbei.',clean:'Tisch abräumen',onway:'Jemand ist unterwegs.',nudge:'Erinnern',nudged:'Erinnerung gesendet',tab:'Ihre Rechnung — Schirm 605',tot:'Laufende Summe',pay:'Bezahlt wird am Ende des Tages bei Ihrem Kellner. Hier wird nichts abgebucht.',send:'Bestellung senden',sent:'An die Bar gesendet',it:'Artikel',langt:'Sprache',
 gtitle:'Allergien und Unverträglichkeiten',gbody:'Wir müssen es wissen, bevor etwas in die Küche geht.',gnone:'Keine Allergien',gsome:'Ich habe Allergien oder Unverträglichkeiten',gpick:'Alles Zutreffende auswählen',gother:'Sonst noch etwas — hier eintragen',gerr:'Bitte mindestens eines auswählen oder eintragen.',ggo:'Weiter zur Karte',abnone:'Keine Allergien erfasst',absome:'Allergien:',edit:'Ändern',
 add:'Hinzufügen',cancel:'Abbrechen',req:'erforderlich',water:'Wird mit 0,5L Wasser serviert.',
 reqs:'Sonderwünsche',reqph:'Sonst noch etwas — wir geben es weiter',reqdisc:'Sonderwünsche sind nicht immer möglich und können extra berechnet werden.',
 surch:'Sonderwunsch',surnote:'Von der Bar hinzugefügt',
 serve:'Servieren',sugar:'Zucker',milk:'Milch',ice:'Eis',extras:'Extras',done:'Garstufe',side:'Extra Beilage',strength:'Stärke',size:'Größe',choice:'Auswählen',weight:'Ungefähres Gewicht',frozen:'Tiefkühl',
 fAll:'Alle',fGlass:'Glasweise',fShot:'Shots',fBottle:'Flaschen',fNone:'In diesem Bereich wird nichts so serviert.'},
tr:{umb:'Şemsiye',min:'Bugünkü minimum',minnote:'Verdiğiniz her sipariş sayılır.',togo:'minimuma kalan',met:'Minimum tamamlandı',cleanp:'Şezlongunuzda boş tabak ya da bardak mı var? Biri gelsin.',clean:'Masamı toplayın',onway:'Biri geliyor.',nudge:'Hatırlat',nudged:'Hatırlatma gönderildi',tab:'Hesabınız — şemsiye 605',tot:'Toplam',pay:'Ödeme gün sonunda garsonunuzla yapılır. Burada tahsilat yapılmaz.',send:'Siparişi gönder',sent:'Bara gönderildi',it:'ürün',langt:'Dil',
 gtitle:'Alerjiler ve intoleranslar',gbody:'Mutfağa bir şey göndermeden önce bilmemiz gerekiyor.',gnone:'Alerjim yok',gsome:'Alerjim veya intoleransım var',gpick:'Geçerli olanları seçin',gother:'Bilmemiz gereken başka bir şey — buraya yazın',gerr:'En az birini seçin ya da kutuya yazın.',ggo:'Menüye devam',abnone:'Alerji kaydı yok',absome:'Alerjiler:',edit:'Düzenle',
 add:'Ekle',cancel:'Vazgeç',req:'zorunlu',water:'Yanında 0,5L su ile servis edilir.',
 reqs:'Özel istekler',reqph:'Başka bir şey — ileteceğiz',reqdisc:'Özel istekler her zaman mümkün olmayabilir ve ek ücrete tabi olabilir.',
 surch:'Özel istek',surnote:'Bar tarafından eklendi',
 serve:'Servis',sugar:'Şeker',milk:'Süt',ice:'Buz',extras:'Ekstralar',done:'Pişme derecesi',side:'Ekstra garnitür',strength:'Sertlik',size:'Boy',choice:'Seçin',weight:'Yaklaşık ağırlık',frozen:'Dondurulmuş',
 fAll:'Tümü',fGlass:'Kadehle',fShot:'Shotlar',fBottle:'Şişeler',fNone:'Bu bölümde bu şekilde servis edilen bir şey yok.'},
bg:{umb:'Чадър',min:'Минимум за деня',minnote:'Всичко, което поръчате, се брои.',togo:'до минимума',met:'Минимумът е достигнат',cleanp:'Празни чинии или чаши на шезлонга? Ще изпратим някого.',clean:'Разчистете масата',onway:'Някой идва.',nudge:'Напомнете',nudged:'Напомнянето е изпратено',tab:'Вашата сметка — чадър 605',tot:'Текуща сума',pay:'Плащането е в края на деня при сервитьора. Тук не се събират пари.',send:'Изпрати поръчката',sent:'Изпратено до бара',it:'артикула',langt:'Език',
 gtitle:'Алергии и непоносимости',gbody:'Трябва да знаем, преди да изпратим нещо в кухнята.',gnone:'Нямам алергии',gsome:'Имам алергии или непоносимости',gpick:'Изберете всичко, което важи',gother:'Друго, което трябва да знаем — напишете тук',gerr:'Изберете поне едно или напишете в полето.',ggo:'Към менюто',abnone:'Няма записани алергии',absome:'Алергии:',edit:'Промени',
 add:'Добави',cancel:'Отказ',req:'задължително',water:'Сервира се с 0,5 л вода.',
 reqs:'Специални желания',reqph:'Нещо друго — ще го предадем',reqdisc:'Специалните желания може да не са възможни и да се таксуват допълнително.',
 surch:'Специално желание',surnote:'Добавено от бара',
 serve:'Сервиране',sugar:'Захар',milk:'Мляко',ice:'Лед',extras:'Екстри',done:'Степен на изпичане',side:'Допълнителна гарнитура',strength:'Сила',size:'Размер',choice:'Изберете',weight:'Приблизително тегло',frozen:'Замразено',
 fAll:'Всички',fGlass:'На чаша',fShot:'Шотове',fBottle:'Бутилки',fNone:'В този раздел няма нищо, сервирано по този начин.'},
ro:{umb:'Umbrelă',min:'Minim astăzi',minnote:'Tot ce comandați contează.',togo:'până la minim',met:'Minim atins',cleanp:'Farfurii sau pahare goale pe șezlong? Trimitem pe cineva.',clean:'Strângeți masa',onway:'Vine cineva.',nudge:'Reamintiți',nudged:'Memento trimis',tab:'Nota dumneavoastră — umbrela 605',tot:'Total curent',pay:'Plata se face la sfârșitul zilei, la ospătar. Aici nu se încasează nimic.',send:'Trimite comanda',sent:'Trimis la bar',it:'produse',langt:'Limbă',
 gtitle:'Alergii și intoleranțe',gbody:'Trebuie să știm înainte de a trimite ceva la bucătărie.',gnone:'Fără alergii',gsome:'Am alergii sau intoleranțe',gpick:'Selectați tot ce se aplică',gother:'Altceva ce ar trebui să știm — scrieți aici',gerr:'Alegeți cel puțin una sau scrieți în casetă.',ggo:'Continuați la meniu',abnone:'Nicio alergie înregistrată',absome:'Alergii:',edit:'Modifică',
 add:'Adaugă',cancel:'Anulează',req:'obligatoriu',water:'Se servește cu o sticlă de apă de 0,5L.',
 reqs:'Cereri speciale',reqph:'Altceva — vom transmite',reqdisc:'Cererile speciale pot fi imposibile și pot fi taxate suplimentar.',
 surch:'Cerere specială',surnote:'Adăugat de bar',
 serve:'Servire',sugar:'Zahăr',milk:'Lapte',ice:'Gheață',extras:'Extra',done:'Gradul de gătire',side:'Garnitură suplimentară',strength:'Tărie',size:'Mărime',choice:'Alegeți',weight:'Greutate aproximativă',frozen:'Congelat',
 fAll:'Toate',fGlass:'La pahar',fShot:'Shoturi',fBottle:'Sticle',fNone:'Nimic din această secțiune nu se servește astfel.'}
};

const ALLERGENS=[
 ['gluten',T('Gluten (wheat, rye, barley, oats)','Γλουτένη (σιτάρι, σίκαλη, κριθάρι, βρώμη)','Gluten (Weizen, Roggen, Gerste, Hafer)','Glüten (buğday, çavdar, arpa, yulaf)','Глутен (пшеница, ръж, ечемик, овес)','Gluten (grâu, secară, orz, ovăz)')],
 ['milk',T('Milk & dairy','Γάλα & γαλακτοκομικά','Milch & Milchprodukte','Süt ve süt ürünleri','Мляко и млечни','Lapte și lactate')],
 ['egg',T('Eggs','Αυγά','Eier','Yumurta','Яйца','Ouă')],
 ['fish',T('Fish','Ψάρια','Fisch','Balık','Риба','Pește')],
 ['crust',T('Crustaceans','Οστρακοειδή','Krebstiere','Kabuklu deniz ürünleri','Ракообразни','Crustacee')],
 ['mol',T('Molluscs','Μαλάκια','Weichtiere','Yumuşakçalar','Мекотели','Moluște')],
 ['nuts',T('Nuts','Ξηροί καρποί','Schalenfrüchte','Sert kabuklu yemişler','Ядки','Fructe cu coajă')],
 ['peanut',T('Peanuts','Αραχίδες','Erdnüsse','Yer fıstığı','Фъстъци','Arahide')],
 ['soy',T('Soy','Σόγια','Soja','Soya','Соя','Soia')],
 ['sesame',T('Sesame','Σουσάμι','Sesam','Susam','Сусам','Susan')],
 ['celery',T('Celery','Σέλινο','Sellerie','Kereviz','Целина','Țelină')],
 ['mustard',T('Mustard','Μουστάρδα','Senf','Hardal','Синап','Muștar')],
 ['lupin',T('Lupin','Λούπινο','Lupine','Acı bakla','Лупина','Lupin')],
 ['sulph',T('Sulphites','Θειώδη','Sulfite','Sülfitler','Сулфити','Sulfiți')]
];

const G={
sugar:{k:'sugar',t:'sugar',type:'one',req:true,o:[
 {l:T('No sugar','Σκέτο','Ohne Zucker','Şekersiz','Без захар','Fără zahăr')},
 {l:T('Little sugar','Λίγη ζάχαρη','Wenig Zucker','Az şekerli','Малко захар','Puțin zahăr')},
 {l:T('Medium','Μέτριο','Mittel','Orta','Средно','Mediu')},
 {l:T('Sweet','Γλυκό','Süß','Şekerli','Сладко','Dulce')},
 {l:T('Sweetener','Ζαχαρίνη','Süßstoff','Tatlandırıcı','Подсладител','Îndulcitor')}]},
milk:{k:'milk',t:'milk',type:'one',req:false,o:[
 {l:T('As it comes','Όπως σερβίρεται','Wie üblich','Standart','Както е','Ca de obicei')},
 {l:T('Oat milk','Γάλα βρώμης','Hafermilch','Yulaf sütü','Овесено мляко','Lapte de ovăz'),p:1},
 {l:T('Milk on the side','Γάλα χωριστά','Milch separat','Sütü ayrı','Мляко отделно','Lapte separat')},
 {l:T('No milk','Χωρίς γάλα','Ohne Milch','Sütsüz','Без мляко','Fără lapte')}]},
ice:{k:'ice',t:'ice',type:'one',req:false,o:[
 {l:T('Normal ice','Κανονικός πάγος','Normal Eis','Normal buz','Нормален лед','Gheață normală')},
 {l:T('Extra ice','Έξτρα πάγος','Extra Eis','Ekstra buz','Повече лед','Gheață în plus')},
 {l:T('Light ice','Λίγος πάγος','Wenig Eis','Az buz','Малко лед','Puțină gheață')},
 {l:T('No ice','Χωρίς πάγο','Ohne Eis','Buzsuz','Без лед','Fără gheață')}]},
shot:{k:'shot',t:'extras',type:'many',req:false,o:[
 {l:T('Extra espresso shot','Έξτρα δόση εσπρέσο','Extra Espresso-Shot','Ekstra espresso shot','Допълнителен шот еспресо','Shot suplimentar de espresso'),p:1.5}]},
strong:{k:'strong',t:'strength',type:'one',req:true,o:[
 {l:T('Standard','Κανονικό','Standard','Standart','Стандартно','Standard')},
 {l:T('Extra strong','Πιο δυνατό','Extra stark','Ekstra sert','По-силно','Mai tare'),p:3}]},
done:{k:'done',t:'done',type:'one',req:true,o:[
 {l:T('Rare','Σενιάν','Blutig','Az pişmiş','Алангле','În sânge')},
 {l:T('Medium rare','Μέντιουμ ρέαρ','Medium rare','Orta az','Медиум реър','Mediu în sânge')},
 {l:T('Medium','Μέτριο','Medium','Orta','Средно','Mediu')},
 {l:T('Medium well','Μέντιουμ γουέλ','Medium well','Orta iyi','Медиум уел','Mediu bine')},
 {l:T('Well done','Καλοψημένο','Durch','İyi pişmiş','Добре опечено','Bine făcut')}]},
side:{k:'side',t:'side',type:'one',req:false,o:[
 {l:T('As it comes','Όπως σερβίρεται','Wie angegeben','Menüdeki gibi','Както е описано','Așa cum e servit')},
 {l:T('French fries','Πατάτες τηγανητές','Pommes frites','Patates kızartması','Пържени картофи','Cartofi prăjiți'),p:6},
 {l:T('Fried sweet potato','Γλυκοπατάτες','Süßkartoffeln','Tatlı patates','Сладък картоф','Cartof dulce'),p:8},
 {l:T('Greek salad','Χωριάτικη','Griechischer Salat','Yunan salatası','Гръцка салата','Salată grecească'),p:12},
 {l:T('Quinoa salad','Σαλάτα κινόα','Quinoa-Salat','Kinoa salatası','Салата с киноа','Salată quinoa'),p:10}]},
hamturkey:{k:'ht',t:'choice',type:'one',req:true,o:[
 {l:T('Ham','Ζαμπόν','Schinken','Jambon','Шунка','Șuncă')},
 {l:T('Turkey','Γαλοπούλα','Pute','Hindi','Пуешко','Curcan')}]},
chickprawn:{k:'cp',t:'choice',type:'one',req:true,o:[
 {l:T('Chicken','Κοτόπουλο','Hähnchen','Tavuk','Пилешко','Pui')},
 {l:T('Prawns','Γαρίδες','Garnelen','Karides','Скариди','Creveți')}]},
prawnchick:{k:'pc',t:'choice',type:'one',req:true,o:[
 {l:T('Crunchy prawn','Τραγανή γαρίδα','Knusprige Garnele','Çıtır karides','Хрупкава скарида','Creveți crocanți')},
 {l:T('Chicken','Κοτόπουλο','Hähnchen','Tavuk','Пилешко','Pui')}]},
pastasauce:{k:'ps',t:'choice',type:'one',req:true,o:[
 {l:T('With butter','Με βούτυρο','Mit Butter','Tereyağlı','С масло','Cu unt')},
 {l:T('Fresh tomato sauce','Με σάλτσα ντομάτας','Mit Tomatensauce','Domates soslu','С доматен сос','Cu sos de roșii')}]},
water:{k:'sz',t:'size',type:'one',req:true,o:[
 {l:T('0.5 L','0,5 L','0,5 L','0,5 L','0,5 л','0,5 L'),abs:0.5},
 {l:T('1 L','1 L','1 L','1 L','1 л','1 L'),abs:2}]},
fruit:{k:'sz',t:'size',type:'one',req:true,o:[
 {l:T('Small','Μικρή','Klein','Küçük','Малка','Mică'),abs:12},
 {l:T('Large','Μεγάλη','Groß','Büyük','Голяма','Mare'),abs:16}]},
platter:{k:'sz',t:'size',type:'one',req:true,o:[
 {l:T('For 2','Για 2','Für 2','2 kişilik','За 2','Pentru 2'),abs:14},
 {l:T('For 4','Για 4','Für 4','4 kişilik','За 4','Pentru 4'),abs:28}]},
tomaw:{k:'wt',t:'weight',type:'one',req:true,o:[
 {l:T('About 0.8 kg','Περίπου 0,8 κιλά','Etwa 0,8 kg','Yaklaşık 0,8 kg','Около 0,8 кг','Aproximativ 0,8 kg'),abs:80},
 {l:T('About 1 kg','Περίπου 1 κιλό','Etwa 1 kg','Yaklaşık 1 kg','Около 1 кг','Aproximativ 1 kg'),abs:100},
 {l:T('About 1.2 kg','Περίπου 1,2 κιλά','Etwa 1,2 kg','Yaklaşık 1,2 kg','Около 1,2 кг','Aproximativ 1,2 kg'),abs:120}]}
};
function serve(g,b,m,j){
  const o=[];
  if(g) o.push({l:T('Glass 150ml','Ποτήρι 150ml','Glas 150ml','Kadeh 150ml','Чаша 150 мл','Pahar 150ml'),abs:g});
  if(b) o.push({l:T('Bottle 750ml','Φιάλη 750ml','Flasche 750ml','Şişe 750ml','Бутилка 750 мл','Sticlă 750ml'),abs:b});
  if(m) o.push({l:T('Magnum 1.5L','Magnum 1,5L','Magnum 1,5L','Magnum 1,5L','Магнум 1,5 л','Magnum 1,5L'),abs:m});
  if(j) o.push({l:T('Jeroboam 3L','Jeroboam 3L','Jeroboam 3L','Jeroboam 3L','Йеровоам 3 л','Jeroboam 3L'),abs:j});
  return {k:'serve',t:'serve',type:'one',req:true,hasGlass:!!g,o};
}

const RQ_FOOD=[
 T('No onion','Χωρίς κρεμμύδι','Ohne Zwiebel','Soğansız','Без лук','Fără ceapă'),
 T('No garlic','Χωρίς σκόρδο','Ohne Knoblauch','Sarımsaksız','Без чесън','Fără usturoi'),
 T('No salt','Χωρίς αλάτι','Ohne Salz','Tuzsuz','Без сол','Fără sare'),
 T('Sauce on the side','Σάλτσα χωριστά','Sauce separat','Sos ayrı','Сосът отделно','Sos separat'),
 T('Spicy','Πικάντικο','Scharf','Acılı','Люто','Picant'),
 T('Not spicy','Χωρίς καυτερό','Nicht scharf','Acısız','Без люто','Fără picant'),
 T('Cut in two','Κομμένο στη μέση','Halbiert','İkiye bölünmüş','Разрязано на две','Tăiat în două'),
 T('Bring this first','Να έρθει πρώτο','Zuerst bringen','Önce gelsin','Донесете първо','Aduceți întâi'),
 T('Bring this last','Να έρθει τελευταίο','Zuletzt bringen','En son gelsin','Донесете накрая','Aduceți la final')
];
const RQ_DRINK=[
 T('No straw','Χωρίς καλαμάκι','Ohne Strohhalm','Pipetsiz','Без сламка','Fără pai'),
 T('Extra lime','Έξτρα λάιμ','Extra Limette','Ekstra misket limonu','Повече лайм','Lime în plus'),
 T('Serve in two glasses','Σε δύο ποτήρια','In zwei Gläsern','İki bardakta','В две чаши','În două pahare'),
 T('Very cold','Πολύ κρύο','Sehr kalt','Çok soğuk','Много студено','Foarte rece'),
 T('Bring this first','Να έρθει πρώτο','Zuerst bringen','Önce gelsin','Донесете първо','Aduceți întâi')
];

const HOT=[G.sugar,G.milk,G.shot], COLD=[G.sugar,G.milk,G.ice,G.shot];
const M={
coffee:{t:T('Coffee & soft','Καφές & αναψυκτικά','Kaffee & Softdrinks','Kahve & meşrubat','Кафе & безалкохолни','Cafea & răcoritoare'),rq:RQ_DRINK,g:[
 {t:T('Coffees','Καφέδες','Kaffee','Kahveler','Кафета','Cafele'),i:[
  ['esp','Espresso','',4,{o:HOT,w:1}],
  ['espd',T('Espresso double','Διπλός εσπρέσο','Doppelter Espresso','Duble espresso','Двойно еспресо','Espresso dublu'),'',5,{o:HOT,w:1}],
  ['cap','Cappuccino','',6,{o:HOT,w:1}],
  ['fesp','Freddo espresso','',6,{o:COLD,w:1}],
  ['fcap','Freddo cappuccino','',6,{o:COLD,w:1}],
  ['frap',T('Frappé','Φραπές','Frappé','Frappe','Фрапе','Frappé'),'',4,{o:[G.sugar,G.milk,G.ice],w:1}],
  ['ell',T('Greek coffee','Ελληνικός','Griechischer Kaffee','Yunan kahvesi','Гръцко кафе','Cafea grecească'),'',5,{o:[G.sugar],w:1}],
  ['elld',T('Greek coffee, double','Ελληνικός διπλός','Griechischer Kaffee, doppelt','Yunan kahvesi, duble','Гръцко кафе, двойно','Cafea grecească, dublă'),'',6,{o:[G.sugar],w:1}],
  ['choc',T('Hot chocolate','Σοκολάτα','Heiße Schokolade','Sıcak çikolata','Топъл шоколад','Ciocolată caldă'),'',5,{o:[G.milk]}]]},
 {t:T('Juices & soft drinks','Χυμοί & αναψυκτικά','Säfte & Softdrinks','Meyve suları & meşrubat','Сокове & безалкохолни','Sucuri & răcoritoare'),i:[
  ['fj',T('Fresh juice','Φρέσκος χυμός','Frisch gepresster Saft','Taze sıkılmış meyve suyu','Прясно изцеден сок','Suc proaspăt'),'',7,{o:[G.ice]}],
  ['mat','Matcha','',7,{o:[G.ice]}],
  ['soda',T('Soft drinks','Αναψυκτικά','Softdrinks','Meşrubat','Безалкохолни напитки','Băuturi răcoritoare'),'',5,{o:[G.ice]}],
  ['jar','Jarritos','',6,{o:[G.ice]}],
  ['ict',T('Iced tea','Παγωμένο τσάι','Eistee','Buzlu çay','Студен чай','Ceai rece'),'',5,{o:[G.ice]}],
  ['ariz','Arizona tea','',6,{o:[G.ice]}],
  ['ener',T('Energy drinks','Ενεργειακά','Energydrinks','Enerji içecekleri','Енергийни напитки','Băuturi energizante'),'',7,{o:[G.ice]}],
  ['smo',T('Smoothies','Smoothies','Smoothies','Smoothie','Смути','Smoothie'),'',8,{}],
  ['prem',T('Premium refreshments','Premium αναψυκτικά','Premium Erfrischungen','Premium içecekler','Премиум напитки','Băuturi premium'),'',5,{}],
  ['per','Perrier','',6,{}],
  ['pel','Pellegrino 0.75L','',8,{}],
  ['wat',T('Still water','Νερό','Stilles Wasser','Su','Вода','Apă plată'),'',0.5,{o:[G.water]}]]},
 {t:T('Ciders','Μηλίτες','Cider','Elma şarabı','Сайдер','Cidru'),i:[
  ['stb','Strongbow','',6,{}],['mil','Milokleftis','',6,{}]]}
]},
bar:{t:T('Bar','Μπαρ','Bar','Bar','Бар','Bar'),rq:RQ_DRINK,filters:['all','glass','shot','bottle'],g:[
 {t:T('Cocktails','Κοκτέιλ','Cocktails','Kokteyller','Коктейли','Cocktailuri'),i:[
  ['moj','Mojito','',11,{o:[G.strong,G.ice]}],['mai','Mai-Tai','',12,{o:[G.strong,G.ice]}],
  ['cos','Cosmopolitan','',12,{o:[G.strong]}],['pal','Paloma','',12,{o:[G.strong,G.ice]}],
  ['cai','Caipirinha','',11,{o:[G.strong,G.ice]}],['mar','Margarita','',11,{o:[G.strong,G.ice]}],
  ['neg','Negroni','',12,{o:[G.strong,G.ice]}],['hug','Hugo','',11,{o:[G.strong,G.ice]}],
  ['nam',T('House cocktail','Κοκτέιλ του σπιτιού','Hauscocktail','Özel kokteyl','Коктейл на заведението','Cocktailul casei'),'',12,{o:[G.strong,G.ice]}],
  ['neg0',T('Negroni, alcohol free','Negroni χωρίς αλκοόλ','Negroni alkoholfrei','Negroni, alkolsüz','Негрони, безалкохолно','Negroni fără alcool'),'',10,{o:[G.ice]}]]},
 {t:T('Spritz','Spritz','Spritz','Spritz','Спритц','Spritz'),i:[
  ['spo','Spritz Aperol','',10,{o:[G.strong,G.ice]}],
  ['spr','Spritz Campari','',10,{o:[G.strong,G.ice]}],
  ['spl','Spritz Limoncello','',10,{o:[G.strong,G.ice]}],
  ['sp0',T('Spritz, alcohol free','Spritz χωρίς αλκοόλ','Spritz alkoholfrei','Spritz, alkolsüz','Спритц, безалкохолно','Spritz fără alcool'),'Aperol',10,{o:[G.ice]}]]},
 {t:T('Beers','Μπίρες','Biere','Biralar','Бири','Beri'),i:[
  ['draft',T('Draft beer, pint 0.45L','Βαρελίσια, 0,45L','Fassbier, 0,45L','Fıçı bira, 0,45L','Наливна бира, 0,45 л','Bere la halbă, 0,45L'),'',7,{}],
  ['hei','Heineken 0.33L','',6,{}],
  ['hei0',T('Heineken, alcohol free','Heineken χωρίς αλκοόλ','Heineken alkoholfrei','Heineken, alkolsüz','Heineken, безалкохолна','Heineken fără alcool'),'',6,{}],
  ['sol','Sol','',7,{}],['erd','Erdinger','',6,{}],['mam','Mammos','',6,{}],['alfa','Alfa Retro','',6,{}],
  ['amst','Amstel Radler','',6,{}],['macf','Mac Farland','',6,{}],['fish','Fisher','',6,{}],['nim','Nimfi','',6,{}]]},
 {t:T('Spirits','Ποτά','Spirituosen','Alkollü içkiler','Спиртни напитки','Băuturi spirtoase'),i:[
  ['dr',T('Spirit','Ποτό','Getränk','İçki','Питие','Băutură'),'',10,{o:[G.ice],srv:'glass'}],
  ['drs',T('Special spirit','Ειδικό ποτό','Spezial-Getränk','Özel içki','Специално питие','Băutură specială'),'',12,{o:[G.ice],srv:'glass'}],
  ['drp',T('Premium spirit','Premium ποτό','Premium-Getränk','Premium içki','Премиум питие','Băutură premium'),'',14,{o:[G.ice],srv:'glass'}],
  ['sh',T('Shot','Σφηνάκι','Shot','Shot','Шот','Shot'),'',3,{srv:'shot'}],
  ['shs',T('Special shot','Ειδικό σφηνάκι','Spezial-Shot','Özel shot','Специален шот','Shot special'),'',4,{srv:'shot'}],
  ['shp',T('Premium shot','Premium σφηνάκι','Premium-Shot','Premium shot','Премиум шот','Shot premium'),'',5,{srv:'shot'}],
  ['bo',T('Bottle','Φιάλη','Flasche','Şişe','Бутилка','Sticlă'),'',100,{srv:'bottle'}],
  ['bos',T('Special bottle','Ειδική φιάλη','Spezial-Flasche','Özel şişe','Специална бутилка','Sticlă specială'),'',120,{srv:'bottle'}],
  ['bop',T('Premium bottle','Premium φιάλη','Premium-Flasche','Premium şişe','Премиум бутилка','Sticlă premium'),'',140,{srv:'bottle'}]]}
]},
food:{t:T('Food','Φαγητό','Essen','Yemek','Храна','Mâncare'),rq:RQ_FOOD,g:[
 {t:T('Snacks','Σνακ','Snacks','Atıştırmalıklar','Снаксове','Gustări'),i:[
  ['tost',T('Toasted sandwich','Τοστ','Getoastetes Sandwich','Tost','Тост','Sandviș prăjit'),
   T('Gouda, mayo, served with crisps','Γκούντα, μαγιονέζα, με πατατάκια','Gouda, Mayo, mit Chips','Gouda, mayonez, cipsle','Гауда, майонеза, с чипс','Gouda, maioneză, cu chipsuri'),5,{o:[G.hamturkey]}],
  ['hd',T('Hot dog','Χοτ ντογκ','Hot Dog','Sosisli sandviç','Хот дог','Hot dog'),
   T('Sausage, ketchup, mustard, mayo','Λουκάνικο, κέτσαπ, μουστάρδα, μαγιονέζα','Wurst, Ketchup, Senf, Mayo','Sosis, ketçap, hardal, mayonez','Наденица, кетчуп, горчица, майонеза','Cârnat, ketchup, muștar, maioneză'),6,{}],
  ['ff',T('French fries','Πατάτες τηγανητές','Pommes frites','Patates kızartması','Пържени картофи','Cartofi prăjiți'),
   T('Ketchup, mustard, mayo','Κέτσαπ, μουστάρδα, μαγιονέζα','Ketchup, Senf, Mayo','Ketçap, hardal, mayonez','Кетчуп, горчица, майонеза','Ketchup, muștar, maioneză'),6,{}],
  ['fsp',T('Fried sweet potato','Γλυκοπατάτες τηγανητές','Frittierte Süßkartoffeln','Tatlı patates kızartması','Пържен сладък картоф','Cartof dulce prăjit'),
   T('Truffle mayo and pico de gallo','Μαγιονέζα τρούφας και pico de gallo','Trüffelmayo und Pico de Gallo','Trüf mayonezi ve pico de gallo','Трюфелова майонеза и пико де гайо','Maioneză cu trufe și pico de gallo'),8,{}],
  ['bag',T('Mediterranean baguette','Μπαγκέτα μεσογειακή','Mediterranes Baguette','Akdeniz baget','Средиземноморски багет','Baghetă mediteraneană'),
   T('Cucumber, tomato, mizithra, oregano, olives','Αγγούρι, ντομάτα, μυζήθρα, ρίγανη, ελιές','Gurke, Tomate, Mizithra, Oregano, Oliven','Salatalık, domates, mizithra peyniri, kekik, zeytin','Краставица, домат, мизитра, риган, маслини','Castravete, roșii, mizithra, oregano, măsline'),7,{}],
  ['tor',T('Chicken tortilla','Τορτίγια κοτόπουλο','Hähnchen-Tortilla','Tavuklu tortilla','Тортила с пилешко','Tortilla cu pui'),
   T('Parmesan, sweet corn, signature sauce, tomato, iceberg','Παρμεζάνα, καλαμπόκι, signature σάλτσα, ντομάτα, iceberg','Parmesan, Mais, Haussauce, Tomate, Eisbergsalat','Parmesan, mısır, özel sos, domates, iceberg','Пармезан, царевица, специален сос, домат, айсберг','Parmezan, porumb dulce, sos signature, roșii, iceberg'),8,{}],
  ['pan',T('Italian panini','Ιταλικό πανίνι','Italienisches Panini','İtalyan panini','Италиански панини','Panini italian'),
   T('Prosciutto, mortadella, mozzarella, rocket, pesto, parmesan','Προσούτο, μορταδέλα, μοτσαρέλα, ρόκα, πέστο, παρμεζάνα','Prosciutto, Mortadella, Mozzarella, Rucola, Pesto, Parmesan','Prosciutto, mortadella, mozzarella, roka, pesto, parmesan','Прошуто, мортадела, моцарела, рукола, песто, пармезан','Prosciutto, mortadella, mozzarella, rucola, pesto, parmezan'),10,{}]]},
 {t:T('Club sandwiches','Κλαμπ σάντουιτς','Club Sandwiches','Club sandviçler','Клуб сандвичи','Sandvișuri club'),i:[
  ['ccs',T('Cold cuts','Αλλαντικών','Aufschnitt','Şarküteri','Колбаси','Mezeluri'),
   T('Ham, bacon, gouda, lettuce, tomato, mayo, fries','Ζαμπόν, μπέικον, γκούντα, μαρούλι, ντομάτα, μαγιονέζα, πατάτες','Schinken, Speck, Gouda, Salat, Tomate, Mayo, Pommes','Jambon, pastırma, gouda, marul, domates, mayonez, patates','Шунка, бекон, гауда, маруля, домат, майонеза, картофи','Șuncă, bacon, gouda, salată, roșii, maioneză, cartofi'),12,{}],
  ['cae',T('Caesar\u2019s','Caesar\u2019s','Caesar\u2019s','Caesar\u2019s','Цезар','Caesar'),
   T('Chicken fillet, gouda, lettuce, tomato, Caesar sauce, fries','Φιλέτο κοτόπουλο, γκούντα, μαρούλι, ντομάτα, σάλτσα Caesar, πατάτες','Hähnchenfilet, Gouda, Salat, Tomate, Caesar-Sauce, Pommes','Tavuk fileto, gouda, marul, domates, Caesar sos, patates','Пилешко филе, гауда, маруля, домат, сос Цезар, картофи','File de pui, gouda, salată, roșii, sos Caesar, cartofi'),14,{}]]},
 {t:T('Burgers','Μπέργκερ','Burger','Burgerler','Бургери','Burgeri'),i:[
  ['scb',T('Smashed cheese burger','Smashed cheese burger','Smashed Cheeseburger','Smash cheeseburger','Смашед чийзбургер','Smashed cheeseburger'),
   T('Beef, cheddar, crispy bacon, lettuce, tomato, mayo','Μοσχάρι, τσένταρ, τραγανό μπέικον, μαρούλι, ντομάτα, μαγιονέζα','Rind, Cheddar, knuspriger Speck, Salat, Tomate, Mayo','Dana, cheddar, çıtır pastırma, marul, domates, mayonez','Телешко, чедър, хрупкав бекон, маруля, домат, майонеза','Vită, cheddar, bacon crocant, salată, roșii, maioneză'),12,{o:[G.side]}],
  ['chb',T('Chicken burger','Μπέργκερ κοτόπουλο','Hähnchenburger','Tavuk burger','Пилешки бургер','Burger de pui'),
   T('Crunchy chicken, cheddar, bacon jam, tomato, iceberg, Caesar sauce','Τραγανό κοτόπουλο, τσένταρ, μαρμελάδα μπέικον, ντομάτα, iceberg, σάλτσα Caesar','Knuspriges Hähnchen, Cheddar, Bacon-Marmelade, Tomate, Eisberg, Caesar-Sauce','Çıtır tavuk, cheddar, pastırma marmelatı, domates, iceberg, Caesar sos','Хрупкаво пиле, чедър, конфитюр от бекон, домат, айсберг, сос Цезар','Pui crocant, cheddar, dulceață de bacon, roșii, iceberg, sos Caesar'),14,{o:[G.side]}],
  ['gbb',T('Smashed G-BBQ burger','Smashed G-BBQ burger','Smashed G-BBQ Burger','Smash G-BBQ burger','Смашед G-BBQ бургер','Smashed G-BBQ burger'),
   T('Beef, cheddar, bacon, pickled sauerkraut, golden BBQ','Μοσχάρι, τσένταρ, μπέικον, πίκλα ξινολάχανο, golden BBQ','Rind, Cheddar, Speck, Sauerkraut, Golden BBQ','Dana, cheddar, pastırma, turşu lahana, golden BBQ','Телешко, чедър, бекон, кисело зеле, golden BBQ','Vită, cheddar, bacon, varză murată, golden BBQ'),14,{o:[G.side]}],
  ['stb2',T('Steak burger','Steak burger','Steakburger','Biftek burger','Стек бургер','Burger cu friptură'),
   T('Beef tagliata, grilled talagani, pleurotus mushrooms, truffle sauce','Μοσχάρι tagliata, ψητό ταλαγάνι, μανιτάρια πλευρώτους, σως τρούφας','Rinder-Tagliata, gegrillter Talagani, Austernpilze, Trüffelsauce','Dana tagliata, ızgara talagani peyniri, istiridye mantarı, trüf sos','Телешка тальята, печен талагани, кладница, трюфелов сос','Tagliata de vită, talagani la grătar, pleurotus, sos de trufe'),16,{o:[G.done,G.side]}],
  ['bao',T('Bao buns, 3 pcs','Bao buns, 3 τεμ.','Bao Buns, 3 Stück','Bao bun, 3 adet','Бао кифлички, 3 бр.','Bao buns, 3 buc.'),
   T('Sweet chilli mayo, cucumber, carrot','Sweet chilli μαγιονέζα, αγγούρι, καρότο','Sweet-Chili-Mayo, Gurke, Karotte','Tatlı acı mayonez, salatalık, havuç','Сладко-люта майонеза, краставица, морков','Maioneză sweet chilli, castravete, morcov'),12,{o:[G.prawnchick]}]]},
 {t:T('Pizza','Πίτσα','Pizza','Pizza','Пица','Pizza'),i:[
  ['pmar','Margherita',T('Tomato sauce, mozzarella, fresh basil','Σάλτσα ντομάτας, μοτσαρέλα, φρέσκος βασιλικός','Tomatensauce, Mozzarella, frisches Basilikum','Domates sosu, mozzarella, taze fesleğen','Доматен сос, моцарела, пресен босилек','Sos de roșii, mozzarella, busuioc proaspăt'),12,{}],
  ['pmed',T('Mediterranean','Μεσογειακή','Mediterran','Akdeniz','Средиземноморска','Mediteraneană'),
   T('Feta, olives, green peppers, fresh oregano','Φέτα, ελιές, πράσινες πιπεριές, φρέσκια ρίγανη','Feta, Oliven, grüne Paprika, frischer Oregano','Feta, zeytin, yeşil biber, taze kekik','Фета, маслини, зелени чушки, пресен риган','Feta, măsline, ardei verde, oregano proaspăt'),14,{}],
  ['ppro','Prosciutto',T('Mozzarella, prosciutto, rocket','Μοτσαρέλα, προσούτο, ρόκα','Mozzarella, Prosciutto, Rucola','Mozzarella, prosciutto, roka','Моцарела, прошуто, рукола','Mozzarella, prosciutto, rucola'),16,{}],
  ['pspe',T('Special','Σπέσιαλ','Spezial','Spesiyal','Специална','Specială'),
   T('Cheese mix, ham, bacon, mushrooms, green pepper','Μίξη τυριών, ζαμπόν, μπέικον, μανιτάρια, πράσινη πιπεριά','Käsemischung, Schinken, Speck, Pilze, grüne Paprika','Peynir karışımı, jambon, pastırma, mantar, yeşil biber','Микс сирена, шунка, бекон, гъби, зелена чушка','Mix de brânzeturi, șuncă, bacon, ciuperci, ardei verde'),16,{}],
  ['pchi',T('Chicken','Κοτόπουλο','Hähnchen','Tavuklu','С пилешко','Cu pui'),
   T('Mozzarella, corn, cream cheese','Μοτσαρέλα, καλαμπόκι, κρέμα τυριού','Mozzarella, Mais, Frischkäse','Mozzarella, mısır, krem peynir','Моцарела, царевица, крема сирене','Mozzarella, porumb, cremă de brânză'),14,{}]]},
 {t:T('Salads','Σαλάτες','Salate','Salatalar','Салати','Salate'),i:[
  ['sgre',T('Greek salad','Χωριάτικη','Griechischer Salat','Yunan salatası','Гръцка салата','Salată grecească'),
   T('Cucumber, tomato, peppers, onion, feta, olives','Αγγούρι, ντομάτα, πιπεριές, κρεμμύδι, φέτα, ελιές','Gurke, Tomate, Paprika, Zwiebel, Feta, Oliven','Salatalık, domates, biber, soğan, feta, zeytin','Краставица, домат, чушки, лук, фета, маслини','Castravete, roșii, ardei, ceapă, feta, măsline'),12,{tag:'VG'}],
  ['scae',T('Caesar\u2019s','Caesar\u2019s','Caesar\u2019s','Caesar\u2019s','Цезар','Caesar'),
   T('Iceberg, parmesan, cherry tomato, croutons','Iceberg, παρμεζάνα, ντοματίνια, κρουτόν','Eisberg, Parmesan, Kirschtomaten, Croûtons','Iceberg, parmesan, kiraz domates, kruton','Айсберг, пармезан, чери домати, крутони','Iceberg, parmezan, roșii cherry, crutoane'),12,{o:[G.chickprawn]}],
  ['snam',T('House salad','Σαλάτα του σπιτιού','Haussalat','Özel salata','Салата на заведението','Salata casei'),
   T('Pasteli, Xanthi gruyere flakes, mango pearls, citrus dressing','Παστέλι, flakes γραβιέρας Ξάνθης, πέρλες mango, dressing εσπεριδοειδών','Pasteli, Xanthi-Gruyère-Flocken, Mangoperlen, Zitrusdressing','Pasteli, Xanthi gravyer, mango incileri, narenciye sos','Пастели, гравиера от Ксанти, манго перли, цитрусов дресинг','Pasteli, gruyère de Xanthi, perle de mango, dressing citrice'),14,{tag:'VG'}],
  ['squi',T('Quinoa','Κινόα','Quinoa','Kinoa','Киноа','Quinoa'),
   T('Watermelon, mint leaves, lemon dressing','Καρπούζι, φύλλα μέντας, dressing μοσχολέμονου','Wassermelone, Minze, Zitronendressing','Karpuz, nane yaprakları, limon sos','Диня, листа мента, лимонов дресинг','Pepene roșu, frunze de mentă, dressing de lămâie'),10,{tag:'VG'}],
  ['sbur',T('Burrata','Μπουράτα','Burrata','Burrata','Бурата','Burrata'),
   T('Cherry tomatoes, basil pesto, aromatic arrabbiata','Ντοματίνια, πέστο βασιλικού, αρωματική arrabbiata','Kirschtomaten, Basilikumpesto, aromatische Arrabbiata','Kiraz domates, fesleğen pesto, aromatik arrabbiata','Чери домати, песто от босилек, ароматна арабиата','Roșii cherry, pesto de busuioc, arrabbiata aromată'),14,{tag:'V'}]]},
 {t:T('Poke bowls','Poke bowls','Poke Bowls','Poke bowl','Поке купи','Poke bowls'),i:[
  ['pksal',T('Salmon','Σολομός','Lachs','Somon','Сьомга','Somon'),
   T('Sushi rice, salmon tartare, wakame, sweet corn, pickled ginger, carrot, cucumber, Asian dressing','Ρύζι σούσι, ταρτάρ σολομού, wakame, καλαμπόκι, πίκλα τζίντζερ, καρότο, αγγούρι, ασιατικό dressing','Sushireis, Lachstatar, Wakame, Mais, eingelegter Ingwer, Karotte, Gurke, asiatisches Dressing','Suşi pirinci, somon tartar, wakame, mısır, turşu zencefil, havuç, salatalık, Asya sos','Суши ориз, тартар от сьомга, вакаме, царевица, мариноват джинджифил, морков, краставица, азиатски дресинг','Orez sushi, tartar de somon, wakame, porumb, ghimbir murat, morcov, castravete, dressing asiatic'),10,{}],
  ['pkchi',T('Chicken','Κοτόπουλο','Hähnchen','Tavuk','Пилешко','Pui'),
   T('Sushi rice, chicken, wakame, avocado, carrot, sweet corn, oyster mayo','Ρύζι σούσι, κοτόπουλο, wakame, αβοκάντο, καρότο, καλαμπόκι, oyster μαγιονέζα','Sushireis, Hähnchen, Wakame, Avocado, Karotte, Mais, Austern-Mayo','Suşi pirinci, tavuk, wakame, avokado, havuç, mısır, oyster mayonez','Суши ориз, пилешко, вакаме, авокадо, морков, царевица, oyster майонеза','Orez sushi, pui, wakame, avocado, morcov, porumb, maioneză oyster'),10,{}]]},
 {t:T('Fitness options','Υγιεινές επιλογές','Fitness-Optionen','Fitness seçenekleri','Здравословни опции','Opțiuni fitness'),i:[
  ['fr',T('Seasonal fruit salad','Φρουτοσαλάτα εποχής','Saisonaler Obstsalat','Mevsim meyve salatası','Плодова салата','Salată de fructe'),'',12,{o:[G.fruit]}],
  ['yog1',T('Low fat yogurt','Γιαούρτι 2%','Magerjoghurt','Light yoğurt','Нискомаслено кисело мляко','Iaurt degresat'),
   T('Seasonal fruit and honey','Φρούτα εποχής και μέλι','Saisonale Früchte und Honig','Mevsim meyveleri ve bal','Сезонни плодове и мед','Fructe de sezon și miere'),6,{}],
  ['yog2',T('Low fat yogurt','Γιαούρτι 2%','Magerjoghurt','Light yoğurt','Нискомаслено кисело мляко','Iaurt degresat'),
   T('Granola, honey, dark chocolate','Γκρανόλα, μέλι, μαύρη σοκολάτα','Granola, Honig, Zartbitterschokolade','Granola, bal, bitter çikolata','Гранола, мед, черен шоколад','Granola, miere, ciocolată neagră'),6,{}],
  ['yog3',T('2% yogurt','Γιαούρτι 2%','Joghurt 2%','%2 yoğurt','Кисело мляко 2%','Iaurt 2%'),
   T('Chia seeds, oats, protein scoop','Σπόροι τσία, βρώμη, scoop πρωτεΐνης','Chiasamen, Hafer, Proteinpulver','Chia tohumu, yulaf, protein tozu','Чиа семена, овес, протеин','Semințe de chia, ovăz, pudră proteică'),7,{}],
  ['pbar',T('Handmade protein bar','Χειροποίητη μπάρα πρωτεΐνης','Hausgemachter Proteinriegel','El yapımı protein bar','Домашно приготвен протеинов бар','Baton proteic de casă'),'',5,{}]]},
 {t:T('Kids menu','Παιδικό μενού','Kindermenü','Çocuk menüsü','Детско меню','Meniu pentru copii'),i:[
  ['kpas',T('Pasta','Μακαρόνια','Nudeln','Makarna','Паста','Paste'),'',8,{tag:'V',o:[G.pastasauce]}],
  ['kmea',T('Meatballs','Κεφτεδάκια','Frikadellen','Köfte','Кюфтета','Chiftele'),
   T('With French fries','Με τηγανητές πατάτες','Mit Pommes frites','Patates kızartmasıyla','С пържени картофи','Cu cartofi prăjiți'),9,{}],
  ['kchi',T('Chicken sticks','Sticks κοτόπουλου','Hähnchensticks','Tavuk çıtır','Пилешки хапки','Bețișoare de pui'),
   T('With French fries','Με τηγανητές πατάτες','Mit Pommes frites','Patates kızartmasıyla','С пържени картофи','Cu cartofi prăjiți'),9,{}]]},
 {t:T('To share','Για μοίρασμα','Zum Teilen','Paylaşımlık','За споделяне','De împărțit'),i:[
  ['cp',T('Cheese platter with cold cuts','Πλατώ τυριών & αλλαντικών','Käseplatte mit Aufschnitt','Peynir ve şarküteri tabağı','Плато сирена и колбаси','Platou de brânzeturi și mezeluri'),'',14,{o:[G.platter]}]]}
]},
chef:{t:T('Chef\u2019s suggestions','Προτάσεις του σεφ','Empfehlungen des Küchenchefs','Şefin önerileri','Предложения на шефа','Sugestiile bucătarului'),rq:RQ_FOOD,g:[
 {t:T('Sea','Θάλασσα','Meer','Deniz','Море','Mare'),i:[
  ['oys',T('Mignonette oysters, each','Στρείδια mignonette, το τεμάχιο','Mignonette-Austern, pro Stück','Mignonette istiridye, adet','Стриди миньонет, за брой','Stridii mignonette, bucata'),
   T('Lemon pearls, chilli oil, bergamot vinegar','Πέρλες λεμονιού, λάδι τσίλι, ξύδι περγαμόντο','Zitronenperlen, Chiliöl, Bergamotte-Essig','Limon incileri, acı biber yağı, bergamot sirkesi','Лимонови перли, чили олио, бергамотов оцет','Perle de lămâie, ulei de chili, oțet de bergamotă'),6,{}],
  ['tar',T('Salmon tartare','Ταρτάρ σολομού','Lachstatar','Somon tartar','Тартар от сьомга','Tartar de somon'),
   T('Asian dressing, chilli, ginger, avocado, chives','Ασιατικό dressing, τσίλι, τζίντζερ, αβοκάντο, σχοινόπρασο','Asiatisches Dressing, Chili, Ingwer, Avocado, Schnittlauch','Asya sos, acı biber, zencefil, avokado, frenk soğanı','Азиатски дресинг, чили, джинджифил, авокадо, лук','Dressing asiatic, chili, ghimbir, avocado, arpagic'),17,{}],
  ['carp',T('Octopus carpaccio','Carpaccio χταποδιού','Oktopus-Carpaccio','Ahtapot carpaccio','Карпачо от октопод','Carpaccio de caracatiță'),
   T('Lime, chilli, chives, olive oil, capers, fleur de sel','Λάιμ, τσίλι, σχοινόπρασο, ελαιόλαδο, κάπαρη, ανθός αλατιού','Limette, Chili, Schnittlauch, Olivenöl, Kapern, Fleur de Sel','Misket limonu, acı biber, frenk soğanı, zeytinyağı, kapari, tuz çiçeği','Лайм, чили, лук, зехтин, каперси, флор де сал','Lime, chili, arpagic, ulei de măsline, capere, fleur de sel'),18,{frozen:1}],
  ['praw',T('Grilled prawns, 330 gr','Γαρίδες ψητές, 330 γρ','Gegrillte Garnelen, 330 g','Izgara karides, 330 gr','Скариди на грил, 330 г','Creveți la grătar, 330 g'),'',18,{frozen:1}]]},
 {t:T('Pasta & risotto','Ζυμαρικά & ριζότο','Pasta & Risotto','Makarna & risotto','Паста & ризото','Paste & risotto'),i:[
  ['lin1',T('Linguini with prawns','Λινγκουίνι με γαρίδες','Linguine mit Garnelen','Karidesli linguini','Лингуини със скариди','Linguine cu creveți'),
   T('White sauce, bisque, garlic, fresh thyme','Λευκή σάλτσα, bisque, σκόρδο, φρέσκο θυμάρι','Weiße Sauce, Bisque, Knoblauch, frischer Thymian','Beyaz sos, bisque, sarımsak, taze kekik','Бял сос, биск, чесън, свежа мащерка','Sos alb, bisque, usturoi, cimbru proaspăt'),17,{}],
  ['lin2',T('Linguini with prawns','Λινγκουίνι με γαρίδες','Linguine mit Garnelen','Karidesli linguini','Лингуини със скариди','Linguine cu creveți'),
   T('Tomato sauce, fresh basil','Σάλτσα ντομάτας, φρέσκος βασιλικός','Tomatensauce, frisches Basilikum','Domates sosu, taze fesleğen','Доматен сос, пресен босилек','Sos de roșii, busuioc proaspăt'),17,{}],
  ['lin3',T('Linguini with prawns','Λινγκουίνι με γαρίδες','Linguine mit Garnelen','Karidesli linguini','Лингуини със скариди','Linguine cu creveți'),
   T('Avocado cream, fresh basil, Aegina pistachio','Κρέμα αβοκάντο, φρέσκος βασιλικός, φιστίκι Αιγίνης','Avocadocreme, frisches Basilikum, Ägina-Pistazie','Avokado kreması, taze fesleğen, Aegina fıstığı','Авокадо крем, пресен босилек, шам фъстък от Егина','Cremă de avocado, busuioc proaspăt, fistic de Egina'),18,{}],
  ['orzo',T('Seafood orzo pasta','Κριθαρότο θαλασσινών','Orzo mit Meeresfrüchten','Deniz ürünlü şehriye','Орзо с морски дарове','Orzo cu fructe de mare'),
   T('Kozani saffron','Κρόκος Κοζάνης','Safran aus Kozani','Kozani safranı','Шафран от Козани','Șofran de Kozani'),16,{}]]},
 {t:T('Meat','Κρέας','Fleisch','Et','Месо','Carne'),i:[
  ['fil',T('Beef fillet','Φιλέτο μόσχου','Rinderfilet','Dana bonfile','Телешко филе','File de vită'),
   T('Sweet potato purée, thyme sauce, butter','Πουρές γλυκοπατάτας, σάλτσα θυμαριού, βούτυρο','Süßkartoffelpüree, Thymiansauce, Butter','Tatlı patates püresi, kekik sosu, tereyağı','Пюре от сладък картоф, сос от мащерка, масло','Piure de cartof dulce, sos de cimbru, unt'),28,{o:[G.done,G.side]}],
  ['rib',T('Rib-eye, 280 gr','Rib-eye, 280 γρ','Rib-Eye, 280 g','Rib-eye, 280 gr','Рибай, 280 г','Rib-eye, 280 g'),
   T('Smashed potatoes, chimichurri','Πατάτες smash, chimichurri','Smashed Potatoes, Chimichurri','Ezme patates, chimichurri','Смачкани картофи, чимичури','Cartofi zdrobiți, chimichurri'),38,{o:[G.done,G.side]}],
  ['tom',T('Tomahawk, dry-aged','Tomahawk, dry-aged','Tomahawk, Dry Aged','Tomahawk, dry-aged','Томахоук, отлежал','Tomahawk, dry-aged'),
   T('Fleur de sel, pickled sauerkraut · 100 € per kilo','Ανθός αλατιού, πίκλα ξινολάχανο · 100 € το κιλό','Fleur de Sel, Sauerkraut · 100 € pro Kilo','Tuz çiçeği, turşu lahana · kilosu 100 €','Флор де сал, кисело зеле · 100 € за килограм','Fleur de sel, varză murată · 100 € pe kilogram'),100,{o:[G.tomaw,G.done,G.side]}]]}
]},
wine:{t:T('Wine & champagne','Κρασιά & σαμπάνιες','Wein & Champagner','Şarap & şampanya','Вино & шампанско','Vin & șampanie'),rq:RQ_DRINK,filters:['all','glass','bottle'],g:[
 {t:T('White wines','Λευκά κρασιά','Weißweine','Beyaz şaraplar','Бели вина','Vinuri albe'),i:[
  ['wb1','Lo, Dr Loosen — 0%','Mosel, Germany / Riesling',7,{o:[serve(7,28)]}],
  ['wb2','Plano, Ktima Techni Oinou','Drama, Greece / Malagouzia',8,{o:[serve(8,30,65)]}],
  ['wb3','Sauvignon Blanc, Ktima Alfa','Amyntaio, Greece',38,{o:[serve(0,38)]}],
  ['wb4','Lenga, Avantis Estate','Evia, Greece / Gewürztraminer',28,{o:[serve(0,28)]}],
  ['wb5','Domaine Malagouzia, Kosta Lazaridi','Evia, Greece',36,{o:[serve(0,36)]}],
  ['wb6','Thema, Ktima Pavlidi','Drama, Greece / Sauvignon blanc, Assyrtiko',32,{o:[serve(0,32,70,150)]}],
  ['wb7','Idysma Dryos Chardonnay','Drama, Greece',36,{o:[serve(0,36,80,160)]}],
  ['wb8','Sauvignon Blanc Fumé, Ktima Alfa','Amyntaio, Greece',46,{o:[serve(0,46)]}],
  ['wb9','Bourgogne, Jean Chartron','Bourgogne, France',60,{o:[serve(0,60)]}],
  ['wb10','Amethystos Fumé, Kosta Lazaridi','Drama, Greece / Sauvignon blanc',44,{o:[serve(0,44)]}],
  ['wb11','Viognier, Ktima Gerovassiliou','Epanomi, Greece',48,{o:[serve(0,48,100,220)]}],
  ['wb12','Ovilos, Ktima Biblia Chora','Paggaio, Greece / Semillon, Assyrtiko',66,{o:[serve(0,66,140,300)]}],
  ['wb13','Santa Rita Hills Chardonnay','Santa Rita / Chardonnay',78,{o:[serve(0,78)]}],
  ['wb14','Cuvée Monsignori, Ktima Argyrou','PDO Santorini, Greece / Assyrtiko',86,{o:[serve(0,86)]}],
  ['wb15','Blanc de Rose, Thymiopoulou','Makedonia, Greece / Xinomavro, Malagouzia',68,{o:[serve(0,68)]}],
  ['wb16','Sancerre Cuvée Edmond, Alphonse Mellot','Val de Loire, France',180,{o:[serve(0,180)]}]]},
 {t:T('Rosé wines','Ροζέ κρασιά','Roséweine','Roze şaraplar','Розе вина','Vinuri rosé'),i:[
  ['rb1','Anastasia, Ktima Manolesaki','Drama, Greece / Cabernet Sauvignon',7,{o:[serve(7,28,68)]}],
  ['rb2','Blusch, Villa Maria','Marlborough, New Zealand',36,{o:[serve(0,36)]}],
  ['rb3','Mati Fortuna, Ktima Astir X','Kalamata, Greece / Merlot, Agiorgitiko',30,{o:[serve(0,30)]}],
  ['rb4','Lenga Rose, Avantis Estate','Evia, Greece / Syrah',30,{o:[serve(0,30)]}],
  ['rb5','Rose de Xinomavro, Thymiopoulou','PDO Naousa, Greece',30,{o:[serve(0,30)]}],
  ['rb6','Idylle, La Tour Melas','Fthiotida, Greece',36,{o:[serve(0,36,84)]}],
  ['rb7','Techni Alypias','Drama, Greece / Syrah',34,{o:[serve(0,34)]}],
  ['rb8','Domaine Rose, Kosta Lazaridi','Drama, Greece',9,{o:[serve(9,36,84,180)]}],
  ['rb9','Rose, Ktima Alfa','Amyntaio, Greece / Xinomavro',46,{o:[serve(0,46)]}],
  ['rb10','Roseblood, Château d\u2019Estoublon','Côtes de Provence, France',60,{o:[serve(0,60,120,350)]}],
  ['rb11','Miraval, Château Miraval','Côtes de Provence, France',60,{o:[serve(0,60,120,350)]}],
  ['rb12','Ott, Château Romassan','Bandol, France',82,{o:[serve(0,82)]}]]},
 {t:T('Champagne & sparkling','Σαμπάνιες & αφρώδη','Champagner & Schaumwein','Şampanya & köpüklü','Шампанско & пенливи','Șampanie & spumante'),i:[
  ['ch1','Moscato d\u2019Asti St Giorgio, Arione','Piemonte, Italy',30,{o:[serve(0,30)]}],
  ['ch2','Bubbly Rose, Matamis Wines','Epanomi, Greece',35,{o:[serve(0,35)]}],
  ['ch3','Prosecco Matiu, L\u2019Antica Quercia','Veneto DOCG, Italy',45,{o:[serve(0,45)]}],
  ['ch4','Blanc de Blanc, Kosta Lazaridi','Drama, Greece / Vidiano',50,{o:[serve(0,50)]}],
  ['ch5','Prosecco Mood, White Gold','Veneto, Italy',60,{o:[serve(0,60)]}],
  ['ch6','Prosecco Mood, DOC Rosé','Veneto, Italy',80,{o:[serve(0,80)]}],
  ['ch7','Collection 246, Louis Roederer','Champagne, France',150,{o:[serve(0,150)]}],
  ['ch8','Cuvée Rosé, Laurent-Perrier','Champagne, France',300,{o:[serve(0,300)]}],
  ['ch9','Moët Brut','Champagne, France',140,{o:[serve(0,140,300)]}],
  ['ch10','Moët Ice','Champagne, France',150,{o:[serve(0,150,330)]}],
  ['ch11','Moët Ice Rosé','Champagne, France',160,{o:[serve(0,160)]}],
  ['ch12','Dom Pérignon','Champagne, France',450,{o:[serve(0,450)]}]]}
]}
};

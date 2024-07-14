#Bu proje, React kullanılarak oluşturulmuş bir yapışkan not uygulamasıdır. Kullanıcıların ekranda not eklemelerine, sürükleyerek taşımalarına ve görüntülemelerine olanak tanır

Özellikler
Ekrana tıklayarak yeni notlar ekleyin ve yazın.
Notları yeniden konumlandırmak için sürükleyin.
Farklı not türleri: Yorum, Gizli Yorum ve Not.
Notlar tarayıcının yerel depolamasında saklanır.

Proje Yapısı
src/App.js: Uygulama mantığını yöneten ana bileşen.
src/components/Note.js: Bireysel notlar için bileşen.
src/components/NoteBox.js: Yeni notlar eklemek için bileşen.
src/components/LeaveCommentText.js: Yorum eklemek için araç ipucunu gösteren bileşen.
src/MainContext.js: Uygulama genelinde durumu yönetmek için bağlam.
<template>
    <div class="home-route">
        <div class="home-route__content">
            <hu-portrait src="assets/portrait.jpg" secondarySrc="assets/writing.jpg"/>
            <hu-card class="home-route__content-card">
                <h1>Hubert Hinkelmann</h1>
                <div>
                    <div style="margin-bottom: 12px;">
                        Rechtsanwalt für: <strong>Sozial-, Verkehrs-, Miet- und WEG-Recht</strong>
                        <br/><br/>
                        Die Kanzlei ist aufgrund der Berufserfahrungen des Herrn Rechtsanwalt Hubert Hinkelmann vorwiegend zivil- und sozialrechtlich ausgerichtet und wendet sich an private und gewerbliche Mandantschaft.
                        <br/><br/>
                        Das Tätigkeitsspektrum umfasst die außergerichtliche Beratung, Vertretung und Vertragsgestaltung, wie die Prozessführung einschließlich einer eventuell notwendigen, anschließenden Zwangsvollstreckung.
                        <br/><br/>
                        Kostentransparenz stellt dabei ein wichtiges Element in der anwaltlichen Beratung dar. Vor der Übertragung eines Mandates und vor der Einleitung weiterer Maßnahmen werden Ihnen die anfallenden Kosten ausführlich dargelegt.
                        <br/><br/>
                        Ständige Fortbildungen, der Einsatz moderner und zeitgemäßer EDV und Bürotechnik, eine gut ausgestattete und ständig aktualisierte juristische Bibliothek sowie der Anschluss an das Internet versetzen die Kanzlei als Dienstleistungsunternehmen in die Lage, die Interessen der Mandanten zügig und zuverlässig wahrzunehmen.
                    </div>
                </div>
            </hu-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeRoute',
};
</script>

<style lang="scss" scoped>
.home-route {
    display: flex;
    justify-content: center;

    &__content {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;

        &-card {
            text-align: justify;
        }
    }
}
</style>

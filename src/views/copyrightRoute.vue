<template>
  <div class="copyright-route">
    <v-card
      title="Datenschutz"
      class="copyright-route__content"
      color="secondary"
      variant="text"
    >
      <div class="copyright-route__content-head">
        <v-card-text class="copyright-route__content-head-text">
          Ihr Interesse an meinem Internetauftritt sowie an meiner Kanzlei freut mich. Sie können meine Webseiten grundsätzlich besuchen, ohne mir mitzuteilen, wer Sie sind. Der Schutz Ihrer Daten ist mir ein selbstverständliches, gleichwohl aber hohes Anliegen. An dieser Stelle möchte ich Sie darüber informieren, welche Informationen Sie bei einem Besuch meiner Webseiten preisgeben und wie diese zu welchen Zwecken verwendet werden.
        </v-card-text>
      </div>
      <div class="copyright-route__content-gdpr">
        <v-card-subtitle class="copyright-route__content-gdpr-subtitle">
          1. Personenbezogene Daten
        </v-card-subtitle>
        <v-card-text class="copyright-route__content-gdpr-text">
          Über die Webseiten von <a href="https://huberthinkelmann.de">https://huberthinkelmann.de</a> werden (mit Ausnahme Ihrer IP-Adresse) keinerlei personenbezogene Daten (zum Beispiel Namen, Anschriften, Telefonnummern oder E-Mail-Adressen) erfasst oder gespeichert.
        </v-card-text>
      </div>
      <div class="copyright-route__content-save-gdpr">
        <v-card-subtitle class="copyright-route__content-save-gdpr-subtitle">
          2. Erhebung und Verarbeitung personenbezogener Daten streng orientiert an der Zweckbestimmung
        </v-card-subtitle>
        <v-card-text class="copyright-route__content-save-gdpr-text">
          Die von Ihnen zur Verfügung gestellten personenbezogenen Daten werden nur verwendet, um Ihre Anfrage zu beantworten. Ihre persönlichen Daten behandele ich vertraulich und verwende sie nur zu dem Zweck, für den diese Daten von Ihnen überlassen wurden beziehungsweise für deren Nutzung und Weitergabe Sie Ihr Einverständnis gegeben haben. Sie werden nicht für Werbezwecke genutzt und nicht an Dritte weitergegeben. Alle Personen, die mit Ihren Daten in Berührung kommen, sind auf die Einhaltung der datenschutzrechtlichen Bestimmungen verpflichtet. Bitte beachten Sie allerdings, dass die Übermittlung der Daten nicht verschlüsselt erfolgt und deshalb keine vertraulichen Informationen gesendet werden sollten.
        </v-card-text>
      </div>
      <div class="copyright-route__content-ip">
        <v-card-subtitle class="copyright-route__content-ip-subtitle">
          3. Protokollierung kommunikations- oder nutzungsbezogener Angaben (IP-Adresse)
        </v-card-subtitle>
        <v-card-text class="copyright-route__content-ip-text">
          Bei jedem Zugriff auf meinen Server werden Daten für statistische sowie Sicherheitszwecke gespeichert, wie zum Beispiel die IP-Adresse, Datum und Uhrzeit der besuchten Seiten. Eine statistische Auswertung anonymisierter Datensätze wird vorgenommen, um unser Angebot zu analysieren und verbessern zu können. Dabei findet keine personenbezogene Aus- oder Verwertung statt. Ich behalte mir allerdings das Recht vor, im Falle von unzulässigen Zugriffen beziehungsweise Zugriffsversuchen auf meinen Server unter Zuhilfenahme einzelner Datensätze eine Herleitung zu personenbezogenen Daten zu veranlassen.
        </v-card-text>
      </div>
      <div class="copyright-route__content-non-gdpr">
        <v-card-subtitle class="copyright-route__content-non-gdpr-subtitle">
          4. Automatisch erfasste nicht-personenbezogene Daten
        </v-card-subtitle>
        <v-card-text class="copyright-route__content-non-gdpr-text">
          Wenn Sie auf die Webseiten von <a href="https://huberthinkelmann.de">https://huberthinkelmann.de</a> zugreifen, werden automatisch (also nicht über eine Registrierung) Informationen vom Webserver gesammelt, die nicht einer bestimmten Person zugeordnet sind (zum Beispiel verwendeter Internet-Browser und Betriebssystem, Domain-Name der Webseite, von der Sie kamen, Anzahl der Besuche, durchschnittliche Verweilzeit, aufgerufene Seiten, Herkunftsland). Diese Informationen werden von mir und meinem beauftragten Dienstleistern, wie dem Provider und der Internetagentur genutzt, um die Funktionsfähigkeit und Attraktivität meines Webangebotes zu ermitteln und zu verbessern.
        </v-card-text>
      </div>
      <div class="copyright-route__content-cookies">
        <v-card-subtitle class="copyright-route__content-cookies-subtitle">
          5. Cookies
        </v-card-subtitle>
        <v-card-text class="copyright-route__content-cookies-text">
          Auf unseren Webseiten werden ausschließlich technisch notwendige Cookies verwendet.
        </v-card-text>
      </div>
      <div class="copyright-route__content-access-right">
        <v-card-subtitle class="copyright-route__content-access-right-subtitle">
          6. Auskunftsrecht
        </v-card-subtitle>
        <v-card-text class="copyright-route__content-access-right-text">
          Als Nutzer dieses Angebots haben Sie jederzeit ein umfassendes Recht auf Auskunft, Berichtigung, Löschung bzw. Sperrung Ihrer gespeicherten Daten. Kontaktieren Sie bitte mich, Rechtsanwalt Hubert Hinkelmann, oder Ihren persönlichen Ansprechpartner in unserem Hause per E-Mail, in Brief- oder Faxform. Die notwendigen Kontaktdaten finden Sie in der Fußzeile der Webseite.
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'copyrightRoute',
};
</script>

<style lang="scss" scoped>
.copyright-route {
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  ol {
    padding-left: 24px;
  }

  .is--not-numbered {
    display: block;
    font-style: italic;
  }

  .is--block {
    border-left: 2px solid $color-highlight;
    padding: 0 16px;
    margin: 8px 0;
  }
}
</style>
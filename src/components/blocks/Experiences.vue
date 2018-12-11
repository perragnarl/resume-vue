<template>
    <section>
        <h2>Erfarenhet</h2>
        <Timeline>
            <TimelineItem name="Investis Digital" title="Full stack-utvecklare" span="2017 - nuvarande">
                På Investis Digital arbetar jag med utveckling av Drupal 7 & 8. Allt från daglig support till nyutveckling. Jag har ansvar för SSL-frågor, och har även jobbat med SEO-relaterade frågor.
            </TimelineItem>
            <TimelineItem name="Göteborgs Stad" title="Gränssnittsutvecklare" span="2015 - 2017">
                Jag blev anställd som den första inhouse-gränssnittsutvecklaren och i mina uppgifter ingick, förutom det vanliga GUI-arbetet, att sätta en struktur för hur vi ska arbeta med gränssnittsutveckling. Jag har satt upp flödet från utveckling, till test, till produktionsmiljö och versionshantering av alla våra resurser i Git. <br>
                    Ett stort uppdrag jag har ansvarat över är hur vi ska effektivisera våra driftsättningar där så mycket som möjligt ska göras automatiskt, mha. automationsverktyget Grunt. Detta för att både spara tid och för att minska risken för fel orsakade av manuell hantering. Eftersom goteborg.se är en väldigt välbesökt sajt ställer det höga krav på att det som kommer upp i vår produktionsmiljö är ordentligt testat. <br>
                    Jag har även varit uppdragsgivare åt våra konsulter inom gränssnittsutveckling, där jag samordnat och planerat delar av deras arbete åt oss.<br>
            </TimelineItem>
            <TimelineItem name="TNS Sifo" title="DP Executive" span="2011 - 2015">
                    I rollen som Data Processor arbetade jag med att sätta upp digitala marknadsundersökningar. Jag fick ansvaret för en större undersökning där jag tillsammans med konsulter utvecklade en anpassad portal för att samla in data från alla 26 länder som undersökningen gick i.<br>
                    Jag jobbade även deltid som projektledare mot slutet av min anställning.
            </TimelineItem>
            <TimelineItem name="Volvo IT" title="First line support" span="2010 - 2011">
                    I rollen som first line support fick jag ta emot samtal från personer som sökte datorhjälp. Då kunskapsnivån på våra användare skiljde sig väldigt mycket var det stora krav på att vara pedagogisk.<br>
                    Jag fick, efter ett tag även ansvaret att vara team coach för min avdelning
            </TimelineItem>
            <TimelineItem name="Ericsson" title="Funktionstestare" span="2009 - 2010">
                    På Ericsson i Katrineholm arbetade jag som funktionstestare för inbyggda system. Då jag visade intresse för felsökning och utveckling fick jag snart ansvaret att vara först med att lära mig nya system och rutiner för att sedan lära upp mina kollegor.
            </TimelineItem>
            <TimelineItem name="Interaktion och design" title="Blekinge tekniska högskola" span="2005 - 2008">
                    Huvudinriktning Arbetsvetenskap med inriktning mot IT.<br>
                    I utbildningen ingick bl.a. kurserna Arbetsvetenskap, Inledande programmering i Java, Interaktionsvisualisering samt Databasteknik.
            </TimelineItem>
        </Timeline>
    </section>
</template>

<script>
import Timeline from "./../parts/timeline/Timeline.vue";
import TimelineItem from "./../parts/timeline/TimelineItem.vue";

export default {
  name: "Experiences",
  components: {
    Timeline,
    TimelineItem
  }
};
</script>

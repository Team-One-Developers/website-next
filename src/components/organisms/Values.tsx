'use client'

import { useState } from 'react'
import { FONT_CONFIGS } from '@/constants'

import { TopLine } from '../atoms/Topline'
import { Accordion } from '../molecules/Accordion'

export const Values = () => {
  const [isAllExpanded, setIsAllExpanded] = useState<boolean>(false)

  return (
    <>
      <div className="flex justify-between p-2 lg:mt-36">
        <TopLine
          colorClassName="text-t1-white"
          fontDefaults={FONT_CONFIGS.desktop_topline}
          opacity={1}
        >
          (T1D HIGH FIVE)
        </TopLine>

        <button
          className="cursor-pointer text-t1-white brightness-100 contrast-100"
          onClick={() => setIsAllExpanded(!isAllExpanded)}
        >
          <TopLine colorClassName="text-t1-white" opacity={1}>
            {`${isAllExpanded ? '▾' : '▸'} ALLE ÖFFNEN`}
          </TopLine>
        </button>
      </div>
      <Accordion
        counter={'01'}
        headline="Wir arbeiten mit und für Menschen"
        text="„Mit und für Menschen arbeiten“ ist für uns keine Selbstverständlichkeit sondern Ausdruck unseres Bewusstseins für die Wichtigkeit jedes Einzelnen -  Kollegen, Kunden, Partner oder Nutzer. Wir wollen der beste Arbeitgeber für unsere Mitarbeiter und der beste Umsetzungspartner für unsere Kunden sein. Das gelingt uns nur dann, wenn wir den Einzelbedürfnissen aller Akteure überdurchschnittliche Aufmerksamkeit schenken, achtsam miteinander umgehen und unser Arbeitsumfeld als Nährboden für persönliches Wachstum gestalten."
        allOpen={isAllExpanded}
      />
      <Accordion
        counter={'02'}
        headline="Wir folgen den agilen Prinzipien"
        text="Wir folgen den Prinzipien des agilen Manifests. Wir halten Agilität für eine notwendige und richtige Antwort auf die Frage, wie ich unsere Kunden bestmöglich innerhalb der sich ständig verändernden Unternehmensumwelt positionieren sollten. Unser Verständnis von technischer Exzellenz, von Kollaboration und Motivation sind ebenfalls zentraler Bestandteil Teil des agilen Manifest sowie von unseren Unternehmenswerten."
        allOpen={isAllExpanded}
      />
      <Accordion
        counter={'03'}
        headline="Wir sind kundenzentrisch"
        text="In Anlehnung an die agilen Prinzipien folgen wir dem Gedanken von kundenzentrisch ausgerichteten Organisation, da wir die kontinuierliche Anpassung an Markt- und somit auch an Kundenbedürfnisse als die übergeordnete Maxime für Geschäftserfolg in einer digitalen Welt betrachten."
        allOpen={isAllExpanded}
      />
      <Accordion
        counter={'04'}
        headline="Wir stehen für Qualität und Nachhaltigkeit"
        text="In allem was wir tun halten wir ein überdurchschnittlich hohes Qualitätsverständnis aufrecht, da wir Qualität als die Grundlage für Nachhaltigkeit und Exzellenz betrachten. Getreu dem Motto “Man ist nie zu klein, um den Unterschied zu machen”, versuchen wir mit gutem Beispiel voran zu gehen und unsere kleine Welt jeden Tag ein bisschen besser zu machen."
        allOpen={isAllExpanded}
      />
      <Accordion
        counter={'05'}
        headline="Wir glauben an Technologie und Innovation"
        text="Wir sind ein Technologie-Unternehmen und glauben an Fortschritt durch Technologie und Innovation. Software ist integraler Bestandteil einer technologisierten Welt und diesen Teil wollen wir unter Berücksichtigung gesellschaftlicher Werte und Normen positiv beeinflussen und aktiv gestalten."
        allOpen={isAllExpanded}
      />
    </>
  )
}

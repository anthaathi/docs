import * as React from 'react';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import Layout from '@theme/Layout';
import { Provider as StyletronProvider } from 'styletron-react';
import { styletron } from '../utils/styletron';
import { BaseProvider, createDarkTheme, createLightTheme } from 'baseui';
import { Section1 } from '../Containers/Section1';
import { Section2 } from '../Containers/Section2';
import { Section3 } from '../Containers/Section3';
import { Section4 } from '../Containers/Section4';

const LightTheme = createLightTheme({
  primaryFontFamily: "'Red Hat Display', sans-serif",
});

const DarkTheme = createDarkTheme({
  primaryFontFamily: "'Red Hat Display', sans-serif",
});

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <StyletronProvider value={styletron}>
      <Layout title={`${siteConfig.title}`} description="Anthaathi">
        <BaseProvider theme={DarkTheme}>
          <main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
          </main>
        </BaseProvider>
      </Layout>
    </StyletronProvider>
  );
}

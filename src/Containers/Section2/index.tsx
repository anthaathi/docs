import React from 'react';
import { useStyletron } from 'baseui';
import {
  HeadingMedium,
  HeadingSmall,
  HeadingXXLarge,
  LabelLarge,
  LabelMedium,
} from 'baseui/typography';
import {
  ApplicationMobile,
  ApplicationWeb,
  CloudServices,
  EdtLoop,
  ShoppingCatalog,
} from '@carbon/icons-react';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import './index.scss';

export function Section2() {
  const [css, $theme] = useStyletron();

  return (
    <div
      id="services"
      className={css({
        maxHeight: '1400px',
        width: '100%',
        overflow: 'hidden',
        [$theme.mediaQuery.medium]: {
          maxHeight: 'none',
        },
        [$theme.mediaQuery.small]: {
          maxHeight: 'none',
        },
        backgroundImage: 'url(/Blue-BG.jpg)',
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
      })}
    >
      <div
        className={css({
          background: 'rgba(19, 22, 92, 1)',
          [$theme.mediaQuery.large]: {
            background:
              'linear-gradient(to left, rgba(19, 22, 92, 0.1) 50%, rgba(19, 22, 92, 0.9) 50%)',
          },
        })}
      >
        <div
          className={css({
            display: 'flex',
            padding: '0 24px',
            maxWidth: '1400px',
            position: 'relative',
            margin: '0 auto',
            height: '100%',
            flexDirection: 'column',
            [$theme.mediaQuery.large]: {
              flexDirection: 'row',
            },
          })}
        >
          <div
            className={css({
              display: 'flex',
              placeContent: 'center',
              flexDirection: 'column',
              width: '100%',
              [$theme.mediaQuery.large]: {
                width: '50%',
                minHeight: '100vh',
              },
            })}
          >
            <div className={css({ paddingTop: '24px', paddingBottom: '48px' })}>
              <LabelLarge $style={{ color: '#F5B640' }}>WHAT WE DO</LabelLarge>
              <HeadingXXLarge marginBottom="scale200" marginTop="scale200">
                Our Services
              </HeadingXXLarge>

              <HeadingSmall
                marginTop="scale200"
                color="rgba(255,255,255,.8)"
                maxWidth={['100%', '100%', '55%']}
              >
                Anthaathi has its own Advanced Phishing Simulation tool called
                Hooked for phishing simulation offering both a SAAS and
                on-premises model.
              </HeadingSmall>

              <Block marginTop="scale1000">
                <Button>See Success Stories</Button>
              </Block>
            </div>
          </div>
          <Items />
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    label: 'Web Development',
    icon: ApplicationWeb,
    image: '/web1.png',
    content:
      'We do not just web design, but out-of-the box digital experiences that takes your business to the next level.',
  },
  {
    label: 'Mobile Development',
    icon: ApplicationMobile,
    image: '/phn.png',
    content:
      'We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery.',
  },
  {
    label: 'ECommerce Development',
    icon: ShoppingCatalog,
    image: '/ecommerce.png',
    content:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    label: 'Cloud Services',
    icon: CloudServices,
    image: '/cloud1.png',
    content:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    label: 'DevSecOps Services',
    icon: EdtLoop,
    image: '/devops1.png',
    content:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
];

function Items() {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: '1fr',
        [$theme.mediaQuery.large]: {
          gridTemplateColumns: '1fr 1fr',
          width: '50%',
        },
        width: '100%',
      })}
    >
      {items.map((value, index) => {
        return (
          <div
            key={index}
            className={
              css({
                border: '1px solid rgb(255,255,255,.2)',
                display: 'flex',
                alignContent: 'center',
                placeContent: 'center',
                placeItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                transitionProperty: 'all',
                transitionDuration: '.2s',
                transitionTimingFunction: 'ease',
                ':hover': {
                  backgroundColor: '#0095D6',
                },
              }) + ' items-wrapper'
            }
          >
            <value.icon size={54} color="#FFF" />
            <HeadingMedium
              marginTop="scale200"
              color="rgba(255,255,255,.9)"
              marginBottom="0"
              maxWidth="80%"
              $style={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {value.label}
            </HeadingMedium>
            <div className="item">
              <LabelMedium
                marginLeft="scale600"
                marginRight="scale600"
                marginTop="scale200"
                color="rgba(255,255,255,.8)"
                marginBottom="scale600"
                $style={{
                  transitionProperty: 'all',
                  transitionDuration: '.1s',
                  transitionTimingFunction: 'ease',
                  [$theme.mediaQuery.large]: {
                    maxHeight: 0,
                  },
                  overflow: 'hidden',
                }}
              >
                {value.content}
              </LabelMedium>
            </div>
          </div>
        );
      })}
    </div>
  );
}

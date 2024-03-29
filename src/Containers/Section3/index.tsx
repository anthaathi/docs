import React from 'react';
import { useStyletron } from 'baseui';
import { HeadingMedium, LabelMedium, LabelSmall } from 'baseui/typography';
import { Button } from 'baseui/button';

export function Section3() {
  const [css, $theme] = useStyletron();

  console.log(require('@site/static/Dxb-BG.jpg'));

  return (
    <div
      style={{
        backgroundImage: `url(${require('@site/static/Dxb-BG.jpg').default})`,
      }}
      className={css({
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
      })}
    >
      <div
        className={css({
          display: 'flex',
          minHeight: '420px',
          paddingTop: '2rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          maxWidth: '1400px',
          margin: '0 auto',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center',
            width: '50%',
            [$theme.mediaQuery.small]: {
              display: 'none',
            },
            [$theme.mediaQuery.large]: {
              display: 'flex',
            },
            [$theme.mediaQuery.medium]: {
              display: 'none',
            },
          })}
        >
          <div>
            <img src={require('@site/static/_BusinessMen.png').default} />
          </div>
        </div>

        <div
          className={css({
            display: 'flex',
            placeContent: 'center',
            flexDirection: 'column',
            width: '50%',
            [$theme.mediaQuery.medium]: {
              width: '100%',
            },
            [$theme.mediaQuery.small]: {
              width: '100%',
            },
          })}
        >
          <div className={css({ width: '320px' })}>
            <LabelSmall $style={{ color: '#F5B640' }}>OUR PURPOSE</LabelSmall>
            <HeadingMedium
              $style={{ color: '#000' }}
              marginTop="scale200"
              marginBottom="0"
            >
              About Anthaathi
            </HeadingMedium>
            <LabelMedium marginTop="scale400" $style={{ color: '#000' }}>
              We help grow businesses with technical excellence in every part of
              software development and security.
            </LabelMedium>

            <Button $style={{ marginTop: '36px' }}>Meet our Team</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

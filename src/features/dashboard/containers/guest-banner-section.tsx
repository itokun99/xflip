import { AlertBanner, SectionLayout } from "@features/_global";
import { BaseContainerProps } from "@features/_global/types";
import React from "react";

export const GuestBannerSection = React.memo(
  ({ animateDuration = 500 }: BaseContainerProps) => {
    return (
      <SectionLayout header={false} gutter animateDuration={animateDuration}>
        <AlertBanner
          text="Jadilah bagian dari kami, mulai ajak teman, dapatkan income tambahan dan umroh bersama"
          button={{
            title: "Daftar",
          }}
          link={{
            title: "Pelajar lebih lanjut",
          }}
        />
      </SectionLayout>
    );
  },
);

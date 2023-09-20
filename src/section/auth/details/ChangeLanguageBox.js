import { Link, Stack } from '@mui/material';
import React from 'react'
import { IconButtonAnimate } from '../../../components/animate';
import Image from '../../../components/image/Image';
import { useLocales } from '../../../locales';

// -------------------------------------------------------


// ------------ Styles ------

const langsHolderSx = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    p: { xs: '25px 0px 0px 0px', md: '25px 50px 0px 50px', lg: '52px 92px' },
    transform: { xs: 'translateX(10 %)', md: '' }
}

const langsTextSx = {
    color: { xs: '#121212', md: "#fff" },
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
    mr: '30px',
    LineHeight: '90px'
}

const flagHolderSx = {
    width: { xs: '30px', md: '55px' },
    height: { xs: '30px', md: '55px' },
    p: '0px'
}

export default function ChangeLanguageBox() {


    const { translate, currentLang, onChangeLang } = useLocales();

    const handleChangeLang = (newLang) => {
        onChangeLang(newLang);
    };
    // ----------- JSX Code --------------
    return (
        <>

            {/* __________ Langauge Link and flag _________ */}
            <Stack sx={{ ...langsHolderSx, display: { md: 'none' } }} >
                {/*---- Current Language  ---- */}
                <Link
                    underline="none"
                    sx={{ ...langsTextSx }}
                    onClick={() =>
                        handleChangeLang(currentLang.value === "en" ? "ar" : "en")
                    }
                >
                    {currentLang.value === "en" ? 'العربية' : "English"}
                </Link>
                {/*---- flag  ---- */}
                <IconButtonAnimate
                    sx={{ ...flagHolderSx }}
                    onClick={() =>
                        handleChangeLang(currentLang.value === "en" ? "ar" : "en")
                    }
                >
                    <Image
                        disabledEffect
                        src={currentLang.value === 'en' ?
                            '/assets/images/auth/ar_flag.svg'
                            : '/assets/icons/flags/ic_flag_en.svg'
                        }
                        alt={currentLang.label}
                    />
                </IconButtonAnimate>

            </Stack>
        </>
    )
}


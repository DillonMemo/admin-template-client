import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

// export const locales = ['en', 'ko'] as const
// export const locales = ["en", "ko"] as const;
// export const localePrefix = "as-needed";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ["en", "ko"],
    localePrefix: "as-needed",
    // Used when no locale matches
    defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function NextIntlProvider({ children }: React.PropsWithChildren) {
    const messages = await getMessages();

    return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}

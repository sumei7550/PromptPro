import type { HomeContent } from "@/content/locales";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import homeStyles from "@/components/home/home-page.module.css";

export function PlatformGroup({ group, gridClassName = homeStyles.platformGrid, cardClassName = "" }: { group: HomeContent["platforms"]["groups"][number]; gridClassName?: string; cardClassName?: string }) {
  return <div className={homeStyles.platformGroup}><div className={homeStyles.platformGroupHeader}><div><h3>{group.title}</h3><p>{group.description}</p></div><Badge status={group.status}>{group.badge}</Badge></div><div className={gridClassName}>{group.platforms.map((platform) => <Card key={platform.name} variant="platform" className={cardClassName}><h3>{platform.name}</h3><p>{platform.description}</p></Card>)}</div></div>;
}

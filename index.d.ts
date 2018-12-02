declare module 'saintelague';

declare namespace saintLague {

  type Options = {
    seats?: number;
    threshold?: number;
    overhang?: boolean;
    tagAlong?: boolean;
    tagAlongSeats?: number;
  };

  type Party = {
    votes: number;
    electorates?: number;
    listSize?: number;
    [key: string]: any;
  };

}

declare function saintLague (
  parties: saintLague.Party[],
  options: saintLague.Options
): any;

export = saintLague;

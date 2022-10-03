import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  cards = [
    {
      img: 'https://s3-alpha-sig.figma.com/img/13a1/07c8/f0b90d5f6dc19e9ca6ecfaab944b25f9?Expires=1665964800&Signature=DCRZE5pDX0Pw27Jk4KxW4Bp4usMmLwJ-JOgwho6I2sARj75ErAnB9WCAlCllpsdr08-x6JI1PXC6aoiO4q7kJIskX-YD5ivcpHCHL70lJ7jy685VDLbihOTZ4hEgX39qJRMLf0U~lfoQXOgIKWIzgzHNeVqJup5S~9Ik4g6ZmMuP4tW-dMGJPRFCA9LDV4QomamY31OjBf5G04CEg44j9ZGMoMWHL25AjpD7NR2Abz~Om8RdGK7CMLBQprt6aX794c67embngLnqsYJYSsk3TeN6ezOD1wP7jjTG6C9KyZCGUHvwyhEKyNIeHLk-LzHrQ1bsY1nmyGafsUj1~SvW~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Zalupa',
      views: 100,
      likes: 200,
      dislikes: 300,
      share: 400,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/13a1/07c8/f0b90d5f6dc19e9ca6ecfaab944b25f9?Expires=1665964800&Signature=DCRZE5pDX0Pw27Jk4KxW4Bp4usMmLwJ-JOgwho6I2sARj75ErAnB9WCAlCllpsdr08-x6JI1PXC6aoiO4q7kJIskX-YD5ivcpHCHL70lJ7jy685VDLbihOTZ4hEgX39qJRMLf0U~lfoQXOgIKWIzgzHNeVqJup5S~9Ik4g6ZmMuP4tW-dMGJPRFCA9LDV4QomamY31OjBf5G04CEg44j9ZGMoMWHL25AjpD7NR2Abz~Om8RdGK7CMLBQprt6aX794c67embngLnqsYJYSsk3TeN6ezOD1wP7jjTG6C9KyZCGUHvwyhEKyNIeHLk-LzHrQ1bsY1nmyGafsUj1~SvW~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Zalupa',
      views: 100,
      likes: 200,
      dislikes: 300,
      share: 400,
    },
    {
      img: 'https://s3-alpha-sig.figma.com/img/13a1/07c8/f0b90d5f6dc19e9ca6ecfaab944b25f9?Expires=1665964800&Signature=DCRZE5pDX0Pw27Jk4KxW4Bp4usMmLwJ-JOgwho6I2sARj75ErAnB9WCAlCllpsdr08-x6JI1PXC6aoiO4q7kJIskX-YD5ivcpHCHL70lJ7jy685VDLbihOTZ4hEgX39qJRMLf0U~lfoQXOgIKWIzgzHNeVqJup5S~9Ik4g6ZmMuP4tW-dMGJPRFCA9LDV4QomamY31OjBf5G04CEg44j9ZGMoMWHL25AjpD7NR2Abz~Om8RdGK7CMLBQprt6aX794c67embngLnqsYJYSsk3TeN6ezOD1wP7jjTG6C9KyZCGUHvwyhEKyNIeHLk-LzHrQ1bsY1nmyGafsUj1~SvW~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Zalupa',
      views: 100,
      likes: 200,
      dislikes: 300,
      share: 400,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

---
title: "Beyond Handwriting: Speculating on What's Next for Ctrl Labs' Brain-Computer Interface?"
tags: ["recording", "deepdive"]
published: true
featuredImage: /images/takagi-example.png
date: '2024-04-02'
---

*Ctrl Labs within Meta’s Reality Labs division released a paper about their incredible progress on a generalizable wristband-based generalizable neural interface. The choice of a handwriting demo task over the previously teased typing task is curious, and unless there is more coming soon, there is still a lot of work to be done before they can launch it as a product. *


Soon after Mark Zuckerberg alluded to a neural interface that was was ‘... actually kind of close to…a product in the, in the next few years…’ on the [Morning Brew](https://www.youtube.com/watch?v=xQqsvRHjas4) show, the Ctrl Labs team at Meta’s Reality Labs released a research paper about their sEMG wristband. 

[The paper](https://www.biorxiv.org/content/10.1101/2024.02.23.581779v1.full.pdf) describes how they used data from thousands of participants to train models that allow their wristband prototype (or research device) to work out of the box for new users - a first in the neural interface field.  Their research is robust and reported in detail, describing how the team
* Combined  their multielectrode sEMG bracelet hardware with a scalable data collection infrastructure
* Used this setup to this to collect data from 1000s of participants for wrist movements, gestures like thumb and finger taps, pinches and swipes, and handwriting tasks
* Developed models that achieved close to 90% classification accuracy for held-out participants on gesture detection and handwritten character recognition

![](../src/images/ctrl-labs-wristband.png)
<small class="caption">still from a <a href="https://www.biorxiv.org/content/10.1101/2024.02.23.581779v1.supplementary-material"> supplementary video</a> uploaded with the paper</small>


They showed that:
* Training on a large enough dataset allows you to build generalizable models for wrist sEMG (although the dataset itself isn't available).
* Model personalization further improves performance and reduces latency.

The 3-page list of contributors indicates how much effort has gone into this since Ctrl Labs' acquisition in 2019. The demonstration of a neural interface that works without calibration is certainly noteworthy for the BCI world. However, there is still a significant gap between this paper and some earlier demos and teasers. In particular, their choice of a handwriting task, which achieves at best less than half the speed of typing, raises more questions.

I'd love to understand why they didn't pick the typing task they had previously shown in a video. In the paper, the authors stress that their ground truth was approximate and relied on prompts and inferring timing. A typing task - perhaps with a touch keyboard - should have been able to provide them with a true ground truth that was more scalable. Typing would also provide much more open space for adaptive learning. Quoting from Meta’s [March 2021 post](https://about.fb.com/news/2021/03/inside-facebook-reality-labs-wrist-based-interaction-for-the-next-computing-platform/), “...imagine instead a virtual keyboard that learns and adapts to your unique typing style (typos and all) over time.

![](../src/images/ctrl-labs-keyboard-mock.png)
<small class="caption">still from an <a href="https://about.fb.com/news/2021/03/inside-facebook-reality-labs-wrist-based-interaction-for-the-next-computing-platform/"> ealier video</a> with a virtual keyboard</small>

Other areas that Meta had discussed earlier, but this paper didn't touch on, were barely perceptible controls or the use of much subtler non-perceptible movements (accessible neuromotor information that isn't being utilized), and intention and co-adaptive learning, or using language models to correct human text. All areas that Meta has demoed and discussed previously, with evidence that they have research devices and models capable of performing these tasks. Hopefully, this is just a preview, and more is coming soon.







## Reconstructing Images

The authors of [Stable Diffusion with Brain activity](https://sites.google.com/corp/view/stablediffusion-with-brain/) use the open source [Stable Diffusion](https://github.com/CompVis/stable-diffusion) model to reconstruct images from the [Natural Scenes fMRI Dataset](https://naturalscenesdataset.org/). They trained models to map from fMRI signals corresponding to the visual and semantic regions of the brain to the image and text components of the latent diffusion models. The results are spectacular, showing that the latent diffusion model combines the two components to produce images that are similar to the original both in meaning and in appearance.

![example reconstructed images](../src/images/takagi-example.png)

## Comparing the papers

|                                        | **High-resolution image reconstruction with latent diffusion models from human brain activity**                                                                                 | **Semantic reconstruction of continuous language from non-invasive brain recordings**                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Published                              | [CVPR 2023](https://openaccess.thecvf.com/content/CVPR2023/html/Takagi_High-Resolution_Image_Reconstruction_With_Latent_Diffusion_Models_From_Human_Brain_CVPR_2023_paper.html) | [BioRxiv](https://www.biorxiv.org/content/10.1101/2022.09.29.509744v1.full.pdf) Sep 2022, [Nature Neuroscience](https://www.nature.com/articles/s41593-023-01304-9.epdf?sharing_token=TxIl7w-LzveYxwD3Bra-HdRgN0jAjWel9jnR3ZoTv0NG3whxCLvPExlNSoYRnDSfIOgKVxuQpIpQTlvwbh56sqHnheubLg6SBcc6UcbQsOlow1nfuGXb3PNEL23ZAWnzuZ7-R0djBgGH8-ZqQhwGVIO9Qqyt76JOoiymgFtM74rj8so6Z9hK_9_jPC-vyeC-EstnL-hhenHP41nL-X1BIg%3D%3D&tracking_referrer=www.vice.com) March 2023 |
| Generative AI model                    | [Stable Diffusion](https://github.com/CompVis/stable-diffusion)                                                                                                                 | [Original GPT](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)                                                                                                                                                                                                                                                                                                                                                 |
| Key contribution                       | Reconstruction of perceived  images from fMRI with much higher semantic and pixel-wise fidelity than previously possible.                                                       | First reconstruction of continuous language from fMRI. Prior work used a fixed vocabulary.                                                                                                                                                                                                                                                                                                                                                                    |
| Individual-specific algorithm training | Yes, all models were built on a per-subject basis                                                                                                                               | Yes, trained separate model for each participant                                                                                                                                                                                                                                                                                                                                                                                                              |
| Brain imaging modality                 | fMRI                                                                                                                                                                            | fMRI                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Dataset description                    | Used the [Natural Scenes dataset](https://naturalscenesdataset.org/) of fMRI measurements of 8 healthy adults shown images from CoCo.                                           | fMRI recordings from 3 subjects while listening to listened to 16 hours of podcasts                                                                                                                                                                                                                                                                                                                                                                           |
| Dataset availability                   | Openly available through [Access Agreement](https://naturalscenesdataset.org/)                                                                                                  | Not openly available                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Code available                         | [Soon](https://sites.google.com/corp/view/stablediffusion-with-brain/)                                                                                                          | [Partly](https://github.com/HuthLab/semantic-decoding)                                                                                                                                                                                                                                                                                                                                                                                                        |


&nbsp;

These recent papers bringing AI and neuroscience worlds closer together were only possible because the 2022 versions of generative AI models were open access (like the Natural scenes fMRI dataset). If we had better neural interfaces (higher bandwidth, more fidelity and better temporal resolution) the models could do a lot more.

&nbsp;

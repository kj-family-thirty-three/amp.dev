// Copyright 2020 The AMPHTML Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import ampToolboxCacheUrl from 'toolbox-cache-url';
import {Category} from '../checks/PageExperienceCheck';

const AMP_PROJECT_CDN_URL = 'cdn.ampproject.org';

export default async function opportunityToImprove(pageUrl, resultOrigin) {
  const cacheUrl = await ampToolboxCacheUrl.createCacheUrl(
    AMP_PROJECT_CDN_URL,
    pageUrl
  );

  const response = await fetch(cacheUrl);
  if (!response.ok) {
    throw new Error(`opportunityToImprove: ${cacheUrl}`);
  }
  const resultCache = await response.json();

  const scoreOrigin = 0;
  const scoreCache = 0;
  const opportunityToImprove = scoreOrigin - scoreCache;

  return opportunityToImprove;
}
